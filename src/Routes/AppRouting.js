
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "../Components/pure/sections/Footer";
import Nav from "../Components/pure/sections/Nav";
import Contact from "../Pages/Contact";
import Details from "../Pages/Details";
import Home from "../Pages/Home";
import NotFound from "../Pages/Not-Found";
import PastEvents from "../Pages/Past-Events";
import Stats from "../Pages/Stats";
import UpcomingEvents from "../Pages/Upcoming-Events";

const AppRouting = () => {

    return (
        <div>
            <Nav />
            <Routes>

                <Route path="/" element={<Home />} ></Route>
                <Route path="/upcoming-events" element={<UpcomingEvents />} ></Route>
                <Route path="/past-events" element={<PastEvents />} ></Route>
                <Route path="/contact" element={<Contact />} ></Route>
                <Route path="/stats" element={<Stats />} ></Route>
                <Route path="/details" element={<Details />} ></Route>
                <Route path="*" element={<NotFound />} ></Route>

            </Routes>
            <Footer />
        </div>
    );
}


export default AppRouting;