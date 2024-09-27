import { ToastContainer } from "react-toastify"
import { GlobalStyle } from "./globalStyle"
import MainRoute from "./routes"

function App() {
  return (
    <>
      <GlobalStyle/>
      <MainRoute/>
      <ToastContainer/>
    </>
  )
}

export default App
