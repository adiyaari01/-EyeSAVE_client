import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { IsLoggedInState } from "./state/atoms";
import Layout from "./Layout";
import Home from "./pages/Home";
import Kindergarten from "./pages/Kindergarten";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Attendance from "./pages/Attendance";
import Children from "./pages/Children";
import ChildRegistrationForm from "./pages/ChildRegistrationForm";

export default () => {
  const isLoggedIn = useRecoilValue(IsLoggedInState);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Layout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/kindergarten" element={<Kindergarten />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/children" element={<Children />} />
              <Route path="/staff" element={<Children />} />
            </Route>
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/childForm/:kindergartenId" element={<ChildRegistrationForm />} />
          </>
        )}
      </Routes>
    </Suspense>
  );
};
