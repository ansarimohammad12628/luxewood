import { useEffect, useState } from "react";
import { CookiesProvider, useCookies } from "react-cookie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Routers/Navbar";
import Footer from "./Pages/Footer";
import IntroPage from "./Pages/IntroPage";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProductPage from "./Pages/ProductPage";
import ContactPage from "./Pages/ContactPage";
import CartPage from "./Pages/CartPage";
import LoginPage from "./Routers/LoginPage";
import ProtectedRoute from "./Routers/ProtectedRoute";
import { Provider } from "react-redux";
import { store } from "./App/store";

function AppContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cookies, , removeCookie] = useCookies(["user"]);


  useEffect(() => {
    if (cookies.user) setIsLoggedIn(true);
  }, [cookies]);

  useEffect(() => {
    if (cookies.user) {
      const timer = setTimeout(() => {
        removeCookie("user", { path: "/" });
        setIsLoggedIn(false);
      }, 3 * 60 * 1000);
      return () => clearTimeout(timer);
    }
  }, [cookies, removeCookie]);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute auth={isLoggedIn}>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute auth={isLoggedIn}>
                <AboutPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/product"
            element={
              <ProtectedRoute auth={isLoggedIn}>
                <ProductPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute auth={isLoggedIn}>
                <ContactPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute auth={isLoggedIn}>
                <CartPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

function App() {
  return (
    <CookiesProvider>
      <AppContent />
    </CookiesProvider>
  );
}

export default App;
