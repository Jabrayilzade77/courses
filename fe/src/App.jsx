import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Elements from "./pages/Elements";
import News from "./pages/News";
import Contact from "./pages/Contact";
import BasketProvider from "./context/BasketProvider";
import Add from "./pages/Add";
import WishListProvider from "./context/WishListProvider";
import WishList from "./pages/WishList";
import Detail from "./pages/Detail";

function App() {
  return (
    <>
      <WishListProvider>
        <BasketProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/wishList" element={<WishList />} />
                <Route path="/basket" element={<Elements />} />
                <Route path="/admin" element={<News />} />
                <Route path="/add" element={<Add />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/detail/:id" element={<Detail />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </BasketProvider>
      </WishListProvider>
    </>
  );
}

export default App;
