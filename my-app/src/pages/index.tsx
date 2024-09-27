import Content from "../structure/content"
import Footer from "../structure/footer"
import Header from "../structure/header"

interface Props {
    children: React.ReactNode;
}


const Page: React.FC<Props> = ({ children }) => (
    <>
        <Header/>
            <Content>
                {children}
            </Content>
        <Footer/>
    </>
)
export default Page