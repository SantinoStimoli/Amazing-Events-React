
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

    const domain = '/Amazing-Events-React'

    return (
        <div>
            <Nav />
            <Routes>

                <Route path={domain + "/"} element={<Home />} />
                <Route path={domain + "/events"} element={<AllEvents />} />
                <Route path={domain + "/events/upcoming"} element={<UpcomingEvents />} />
                <Route path={domain + "/events/past"} element={<PastEvents />} />
                <Route path={domain + "/contact"} element={<Contact />} />
                <Route path={domain + "/stats"} element={<Stats />} />
                <Route path={domain + "/events/:id"} element={<Details />} />
                <Route path={domain + "*"} element={<NotFound />} />

            </Routes>
            <Footer />
        </div>
    );
}


export default AppRouting;