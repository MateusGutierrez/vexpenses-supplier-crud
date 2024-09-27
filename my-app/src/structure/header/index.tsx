import ThemeToggleButton from "../../components/buttons/ThemeToggleButton";
import { HeaderUI } from "./style";

const Header = () => (
    <HeaderUI>
        <div className="header-container">
            <h2>VExpenses - supplier - CRUD</h2>
            <ThemeToggleButton />
        </div>
    </HeaderUI>
)
export default Header;