import TopNavbar from "../TopNavbar";
import Navbar from "../Navbar";
import BotNavbar from "../BotNavbar";
import Footer from "../Footer";
import { Outlet} from "react-router-dom";

export default function HomeTemplate () {
    return (
        <>
        <TopNavbar/>
        <Navbar/>
        <BotNavbar/>
        <Footer/>
        <Outlet/>
        </>
    );
}

