import { AiOutlineLogout } from 'react-icons/ai';
import { ButtonUI } from '../../components/buttons/style';
import ThemeToggleButton from '../../components/buttons/themeToggleButton';
import { userStore } from '../../store/userStore';
import { HeaderUI } from './style';
import { useCallback } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const loggedUser = userStore(state => state.loggedUser);
  const logout = userStore(state => state.logout);
  const onClick = useCallback(() => {
    logout();
    toast.success('Lgout', { autoClose: 2500 });
  }, [logout]);
  return (
    <HeaderUI>
      <div className="header-container">
        <h2>VExpenses - supplier - CRUD</h2>
        <div className="user-container">
          {loggedUser ? (
            <>
              <label>{loggedUser.user.name}</label>
              <ButtonUI onClick={onClick}>
                <AiOutlineLogout />
              </ButtonUI>
            </>
          ) : null}
          <ThemeToggleButton />
        </div>
      </div>
    </HeaderUI>
  );
};
export default Header;
