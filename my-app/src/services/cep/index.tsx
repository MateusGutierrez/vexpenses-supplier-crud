import { ReactNode, useCallback, useContext, useMemo } from 'react';
import { createContext } from 'react';
import { cep_api } from '../../apis/cep';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ViaCepResponse } from './interface';

interface CepContextType {
  retrieveAddress: (cep: string) => Promise<ViaCepResponse>;
}

const CepContext = createContext<CepContextType | undefined>(undefined);

interface CepProviderProps {
  children: ReactNode;
}

export const CepProvider: React.FC<CepProviderProps> = ({ children }) => {
  const retrieveAddress = useCallback(async (cep: string) => {
    const cleanedCep = cep.replace(/\D/g, '');
    if (cleanedCep.length !== 8) {
      toast.error('CEP inválido. Certifique-se de que ele tenha 8 dígitos.', {
        autoClose: 2500
      });
      return null;
    }

    try {
      const response = await cep_api.get(`${cleanedCep}/json`);
      if (response.data.erro) {
        toast.error('CEP não encontrado.', { autoClose: 2500 });
        return null;
      }
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar o endereço:', error);
      toast.error('Erro ao buscar o endereço. Tente novamente mais tarde.', {
        autoClose: 2500
      });
      return null;
    }
  }, []);
  const value = useMemo(() => ({ retrieveAddress }), [retrieveAddress]);
  return <CepContext.Provider value={value}>{children}</CepContext.Provider>;
};

export const useCep = (): CepContextType => {
  const context = useContext(CepContext);
  if (!context) {
    throw new Error('useCep deve ser usado dentro de um CepProvider');
  }
  return context;
};
