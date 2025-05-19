import React from "react";
import { Routes, Route, Outlet, Navigate} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./contact";
import NotFound from "./notfound";
import ContactForm from "./conform";

function Dashboard() {
  return (
    <div className="py-10 px-6 md:px-12 lg:px-24 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Dashboard</h1>
      </div>
    </div>
  );
}
const isAuthenticated = false; // change to true to allow access


function ProtectedRoute({ children }) {
  return isAuthenticated ? children : <Navigate to="/" replace />;
}


//navbar
function WithNavbarLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

function WithoutNavbarLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* with navbar */}
      <Route element={<WithNavbarLayout />}>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* without navbar */}
      <Route element={<WithoutNavbarLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/conform" element={<ContactForm />} />
      </Route>
    </Routes>
  );
}


export default App;
