import { Routes, Route, useLocation } from "react-router-dom";
import AppHeader from "./components/app-header/AppHeader";
import Landing from "./pages/Landing/Landing";
import AppFooter from "./components/app-footer/AppFooter";
import Auth from "./pages/auth/Auth";
import DashHeader from "./components/dash-header/DashHeader";
import DashBoard from "./pages/dashboard/Dashboard";
import "./App.css";

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
      {location.pathname !== "/login" &&
        location.pathname !== "/signup" &&
        location.pathname !== "/dashboard" && <AppHeader />}
      {location.pathname === "/dashboard" && <DashHeader />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Auth />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
      {!(
        location.pathname === "/login" ||
        location.pathname === "/signup" ||
        location.pathname === "/dashboard"
      ) && <AppFooter />}
    </div>
  );
}

export default App;
