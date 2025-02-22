import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./Layout/Home";
import Dashboard from "./Layout/Dashboard";
import Admin from "./Layout/Admin";
import Messages from "./Layout/Messages";
import Settings from "./Layout/Settings";
import LayoutLogin from "./Layout/LayoutLogin";
import ProtectRoute from "./component/ProtectRoute/ProtectRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LayoutLogin />} />

        <Route
          path="/*"
          element={
            <ProtectRoute>
              <div className="flex flex-col lg:flex lg:flex-row text-black h-full">
                <div className="lg:fixed lg:w-[276px] lg:h-full lg:bg-[rgb(239,239,239)] sm:mx-5 sm:mt-2 sm:my-5 lg:mx-0 lg:mt-0 my-5 mx-5 ">
                  <Header />
                </div>
                <div className="lg:pl-[276px]">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/messages" element={<Messages />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="*" element={<div>404 - Page Not Found</div>} />
                  </Routes>
                </div>
              </div>
            </ProtectRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
