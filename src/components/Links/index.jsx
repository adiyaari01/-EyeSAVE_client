import {List} from "@mui/material"
import {useSetRecoilState} from "recoil";
import {IsLoggedInState} from "../../state/atoms";
import {NavLink, useNavigate} from "react-router-dom";
import HomeIcon from '@mui/icons-material/HomeOutlined';
import PauseIcon from '@mui/icons-material/PauseCircleOutlineOutlined';
import PlayIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import MessageIcon from '@mui/icons-material/MailOutline';
import StaffIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ChildrenIcon from '@mui/icons-material/ChildCareOutlined';
import AttendanceIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import EventsIcon from '@mui/icons-material/TheaterComedy';
import {Button} from "@mui/material";
import "./styles.css";

// text-decoration="none"

const NavLinkItem = ({Icon, to, label, handleClick}) => <div className="nav-item">
    {
        to
            ? <NavLink to={to} style={{color: "#E3E3E3"}}><Icon fontSize="large"/>{label}</NavLink>
            : <Button component="a" onClick={handleClick} style={{color: "#E3E3E3"}}><Icon fontSize="large"/>{label}</Button>
    }
</div>

// Todo: how to control each icon?

export default () => {
    const navigate = useNavigate()
    const setLoggedIn = useSetRecoilState(IsLoggedInState)
    const handleLogout = () => {
        /* TODO: auth server side logout */
        setLoggedIn(false)
        navigate("/login")
    }

    return <List sx={{width: '100%', maxWidth: 360}}>
        <NavLinkItem to="/" label="Home" Icon={HomeIcon}/>
        <NavLinkItem to="watchLive" label="Live" Icon={PlayIcon}/>
        <NavLinkItem to="recordings" label="Recordings" Icon={PauseIcon}/>
        {/* <NavLinkItem to="forms" label="Forms" Icon={FormsIcon}/> */}
        <NavLinkItem to="messages" label="Messages" Icon={MessageIcon}/>
        <NavLinkItem to="attendance" label="Attendance" Icon={AttendanceIcon}/>
        <NavLinkItem to="children" label="ChildrenInfo" Icon={ChildrenIcon}/>
        <NavLinkItem to="staff" label="StaffInfo" Icon={StaffIcon}/>
        <NavLinkItem to="events" label="Events" Icon={EventsIcon}/>
        <NavLinkItem handleClick={handleLogout} label="Logout" Icon={LogoutIcon}/>
    </List>
}
