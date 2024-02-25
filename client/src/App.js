import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
// import Dashboard from "./pages/user/Dashboard";
// import Profile from "./pages/user/Profile";
// import MyJourney from "./pages/user/MyJourney";
// import MyPayments from "./pages/user/MyPayments";
// import AdminDashboard from "./pages/Admin/AdminDashboard";
// import Users from "./pages/Admin/Users";
// import Courses from "./pages/Admin/Courses";
// import Payments from "./pages/Admin/Payments";
// import PrivateRoute from "./components/Routes/Private";
// import AdminRoute from "./components/Routes/AdminRoute";
// import ForgotPasssword from "./pages/Auth/ForgotPassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/profile" element={<Profile />} />
          <Route path="user/my-journey" element={<MyJourney />} />
          <Route path="user/my-payments" element={<MyPayments />} />
        </Route> */}
        {/* <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/courses" element={<Courses />} />
          <Route path="admin/payments" element={<Payments />} />
        </Route> */}
        <Route path="/register" element={<Register />} />
        {/* <Route path="/forgot-password" element={<ForgotPasssword />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/journey" element={<Journey />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
