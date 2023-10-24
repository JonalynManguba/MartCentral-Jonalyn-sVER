import TopNavbar from "../components/TopNavbar";
import Navbar from "../components/Navbar";
import BotNavbar from "../components/BotNavbar";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import  CardDeals  from "../components/CardDeals";

export default function Home ()  {
  return (
    <>
    <TopNavbar/>
    <Navbar/>
    <BotNavbar/>
    <CardDeals/>
    <Categories/>
    <Footer/>
    </>
  );
}
