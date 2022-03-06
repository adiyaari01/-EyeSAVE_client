import {Routes, Route} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {IsLoggedInState} from "./state/atoms";
import Layout from "./Layout";
import Home from "./pages/Home";
import Kindergarten from "./pages/Kindergarten";
import Login from "./pages/Login"

export default () => {
    const isLoggedIn = useRecoilValue(IsLoggedInState)
    return (
        <Routes>
            {
                isLoggedIn
                    ? <>
                        <Route path="/" element={<Layout/>}>
                            <Route path="/home" element={<Home/>}/>
                            <Route path="/kindergarten" element={<Kindergarten/>}/>
                        </Route>
                    </>
                    :<>
                        <Route path="/login" element={<Login/>}/>
                    </>
            }

        </Routes>
    );
};
