import Header from "../components/Header";
import Footer from "../components/Footer";
import {Outlet} from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function MainLayout({}) {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}