
import { Route, Routes } from "react-router-dom";
import Footer from "../Components/pure/Footer";
import Loader from "../Components/pure/Loader";
import Nav from "../Components/pure/Nav";
import AllEvents from "../Pages/All-Events";
import Contact from "../Pages/Contact";
import Details from "../Pages/Details";
import Home from "../Pages/Home";
import NotFound from "../Pages/Not-Found";
import PastEvents from "../Pages/Past-Events";
import Stats from "../Pages/Stats";
import UpcomingEvents from "../Pages/Upcoming-Events"

const AppRouting = () => {

    return (
        <div>
            <Nav />
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/events" element={<AllEvents />} />
                <Route path="/events/upcoming" element={<UpcomingEvents />} />
                <Route path="/events/past" element={<PastEvents />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/stats" element={<Stats />} />
                <Route path="/events/:id" element={<Details />} />
                <Route path="*" element={<NotFound />} />

            </Routes>
            <Footer />
        </div>
    );
}


export default AppRouting;