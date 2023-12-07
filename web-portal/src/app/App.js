import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLayout from './components/layouts/AdminLayout';
import DashboardPage from './components/admin/pages/Dashboard';
import WebsiteLayout from './components/layouts/WebsiteLayout';
import HomePage from './components/pages/Home';
import AboutPage from './components/pages/About';
import NewsPage from './components/pages/News';
import LoginPage from './components/auth/Login';
import SignUpPage from './components/auth/SignUp';
import ContactPage from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
import AdminNewsPage from './components/admin/pages/AdminNewsPage';
import AddNewsPage from './components/admin/pages/AddNewsPage';
import AdminServicePage from './components/admin/pages/AdminServicePage';
import AdminAboutUsPage from './components/admin/pages/AdminAboutUsPage';
import AdminContactPage from './components/admin/pages/AdminContactPage';
import AddAboutPage from './components/admin/pages/AddAboutPage';
import AddServicePage from './components/admin/pages/AddServicePage';
import ServicePage from './components/pages/ServicePage';
import UserPage from './components/admin/pages/UserPage';
import AddUserPage from './components/admin/pages/AddUserPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/admin/*"
          element={
            <AdminLayout>
              <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/about" element={<AdminAboutUsPage />} />
                <Route path="/add-about" element={<AddAboutPage />} />
                <Route path="/add-about/:id?" element={<AddAboutPage />} />
                <Route path="/contact" element={<AdminContactPage />} />
                <Route path="/add-service" element={<AddServicePage />} />
                <Route path="/services" element={<AdminServicePage />} />
                <Route path="/news" element={<AdminNewsPage />} />
                <Route path="/add-news" element={<AddNewsPage />} />
                <Route path="/users" element={<UserPage />} />
                <Route path="/add-user" element={<AddUserPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AdminLayout>
          }
        />
        <Route
          path="/*"
          element={
            <WebsiteLayout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </WebsiteLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;