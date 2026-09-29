import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import TopBar from './components/Header/TopBar';
import Navbar from './components/Header/Navbar';
import Footer from './components/Common/Footer';

// Pages
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ApplicationsPage from './pages/ApplicationsPage';
import DealerPage from './pages/DealerPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import DealerLoginPage from './pages/DealerLoginPage';
import DealerDashboardPage from './pages/DealerDashboardPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

// Public Layout containing TopBar, Navbar, Footer
const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Routes>
      {/* Public Pages Layout */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:id" element={<ProductDetailPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="applications" element={<ApplicationsPage />} />
        <Route path="dealer" element={<DealerPage />} />
        <Route path="resources" element={<ResourcesPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>

      {/* Portals without standard public navbar */}
      <Route path="/dealer/login" element={<DealerLoginPage />} />
      <Route path="/dealer/dashboard" element={<DealerDashboardPage />} />
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route path="/admin" element={<AdminDashboardPage />} />
    </Routes>
  );
}

export default App;
