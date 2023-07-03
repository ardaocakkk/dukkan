import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./Routes/Home";
import {ChakraProvider} from "@chakra-ui/react";
import ProductDetail from "./Routes/ProductDetail";
import Category from "./Routes/Category";
import Login from "./Routes/Login";
import Register from "./Routes/Register";
import ForgotPassword from './Routes/ForgotPassword'
import Store from "./Routes/Store";
import StoreDetail from "./Routes/StoreDetail"
function App() {
  return (
      <ChakraProvider>
      <BrowserRouter>
          <Routes>
              <Route path={'/'} element={<Home/>}/>
              <Route path={'detail/:id'} element={<ProductDetail/>}></Route>
              <Route path={'category/:type'} element={<Category/>}></Route>
              <Route path={'login'} element={<Login/>}></Route>
              <Route path={'register'} element={<Register/>}></Route>
              <Route path={'forgotpassword'} element={<ForgotPassword/> }></Route>
              <Route path={'store'} element={<Store/>}></Route>
              <Route path={'store/:store_name'} element={<StoreDetail/>}></Route>
          </Routes>
      </BrowserRouter>
      </ChakraProvider>
  );
}

export default App;
