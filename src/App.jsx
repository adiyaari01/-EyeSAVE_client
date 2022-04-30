import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { IsLoggedInState } from "./state/atoms";
import Layout from "./Layout";
import Home from "./pages/Home";
import Kindergarten from "./pages/Kindergarten";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Attendance from "./pages/Attendance";
import Children from "./pages/Children";
import Staff from "./pages/Staff";
import Parents from "./pages/Parents";
import Events from "./pages/Events";
import ChildRegistrationForm from "./pages/ChildRegistrationForm";
import WatchLive from "./pages/WatchLive";
import Messages from "./pages/Messages"
import Info from "./pages/Info"
import Settings from "./pages/Settings"

export default () => {
  
  const isLoggedIn = useRecoilValue(IsLoggedInState);
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/kindergarten" element={<Kindergarten />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/children" element={<Children />} />
              <Route path="/parents" element={<Parents />} />
              <Route path="/staff" element={<Staff />} />
              <Route path="/events" element={<Events />} />
              <Route path="/watchLive" element={<WatchLive />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/info" element={<Info />} />
              <Route path="/settings" element={<Settings />} />
              
            </Route>
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/childForm/:kindergartenId" element={<ChildRegistrationForm />} />
            <Route path="/" element={<Navigate to="/login" />}/>
          </>
        )}
      </Routes>
    </Suspense>
  );
};
