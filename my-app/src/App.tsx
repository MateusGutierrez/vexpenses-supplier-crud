import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from './globalStyle';
import MainRoute from './routes';
import { AuthProvider } from './services/user';
import { CepProvider } from './services/cep';

function App() {
  return (
    <AuthProvider>
      <CepProvider>
        <GlobalStyle />
        <MainRoute />
        <ToastContainer />
      </CepProvider>
    </AuthProvider>
  );
}

export default App;
