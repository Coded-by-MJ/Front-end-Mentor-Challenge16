import Wrapper from "./components/Wrapper"
import ShopProvider from "./context/ShopProvider"


function App() {


  return (
    <ShopProvider>
      <Wrapper />
    </ShopProvider>
  )
}

export default App
