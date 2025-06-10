import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import Intro from "./pages/Intro.jsx";
import EPR from "./pages/EPR.jsx";
import News from "./pages/News.jsx";
import Contact from "./pages/Contact.jsx";
import Support from "./pages/Support.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/intro" element={<Intro />} />
                    <Route path="/epr" element={<EPR />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/support" element={<Support />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;