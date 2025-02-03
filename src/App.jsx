import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthLayout from '@/layouts/AuthLayout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import LoginPage from '@/pages/LoginPage';
import NotFoundPage from '@/pages/NotFoundPage';
import MainLayout from "./layouts/MainLayout.jsx";

function App() {
    return (
        <Router>
            <Routes>
                {/* 메인 레이아웃이 적용되는 라우트들 */}
                <Route element={<MainLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Route>

                {/* 인증 레이아웃 (헤더/푸터 없는 간단한 레이아웃) */}
                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<LoginPage />} />
                </Route>

                {/* 404 페이지 */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}

export default App;