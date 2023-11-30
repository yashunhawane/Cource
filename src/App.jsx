import "./App.css";
import Cart from "./pages/Cart";
import UserProfile from "./pages/user/UserProfile";
import CourseDetail from "./pages/CourseDetail";
import USerSignup from "./pages/user/USerSignup";
import Home from "./pages/Home";
import UserLogin from "./pages/user/UserLogin";
import { Route, Routes } from "react-router-dom";
import CreateCourse from "./pages/CreateCourse";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/detail" element={<CourseDetail />} />
      <Route path="/signup" element={<USerSignup />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="createCource" element={<CreateCourse />} />
    </Routes>
  );
}

export default App;
