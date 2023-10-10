import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import HomePage from "./components/home/HomePage";
import ProductPage from "./components/ProductPage/ProductPage";

function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element=<HomePage /> />
        <Route path="/Product/:productId" element=<ProductPage /> />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
