import { GlobalStyles } from "./GlobalStyles";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Trendings from "./components/trendings/Trendings";
import Reviews from "./components/reviews/Reviews";
import Update from "./components/update/Update";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/footer";
import Arrow from "./components/arrow/Arrow";

export default function App() {
  return (
    <>
      <GlobalStyles/>
      <Header/>
      <Home/>
      <Trendings/>
      <Reviews/>
      <Update/>
      <Contact/>
      <Footer/>
      <Arrow/>
    </>
  )
}