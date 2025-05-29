import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Shop from "./pages/Shop"
import ShopCategory from "./pages/ShopCategory"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import LoginSingup from "./pages/LoginSingup"
import Footer from "./components/Footer"
import men_banner from "./assets/bannerboy.jpeg"
import women_banner from "./assets/bannergirl.jpg"
import kids_bannber1 from "./assets/banner1kids.jpg"




function App() {

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Shop/>}/>
      <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/>}/>
      <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />}/>
      <Route path="/kids" element={<ShopCategory banner={kids_bannber1} category="kid" />}/>
      <Route path="/product" element={<Product/>}>
        <Route path=":productId" element={<Product/>}/>
      </Route>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<LoginSingup/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>

 
    </>
  )
}

export default App
