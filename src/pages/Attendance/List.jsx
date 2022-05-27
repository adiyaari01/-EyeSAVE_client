import { Card, Stack, Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery'
import "./styles.css";
import {updateChildAttendanceByDateAndChildId, postChildAttendance, } from "../../api"

const getDateAndTime = () => {
  let date_ob = new Date();
  // adjust 0 before single digit date
  let day = ("0" + date_ob.getDate()).slice(-2);
  // current month
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  // current year
  let year = date_ob.getFullYear();

  let minutes = date_ob.getMinutes();
  let hour = date_ob.getHours();

  let time = hour + ":" + minutes;
  let date = year + "-" + month + "-" + day;
  // return json object of date in YYYY-MM-DD format and time in HH:MM format 
  return ({ time: time, date:date });    
  // return year + "-" + month + "-" + day;
};

export function List(props) {
  const matches = useMediaQuery('(min-width:600px)');
  
  const handleCheckIn = async (childId) => {
    const date = getDateAndTime();
    const checkIn = {
      _childId : childId,
      _date : date["date"],
      _arrivalTime : date["time"],
      _departureTime : "",
      _absence : false,
      _childDelay : false,
      _escortDelay : false,
      _escortArrival : false
    }
    await postChildAttendance(checkIn); 
    window.location.reload();
  }

  const handleCheckOut = async (childId) => {
    const date = getDateAndTime();
    const checkOut = {
      _childId : childId,
      _date : date["date"],
      _departureTime : date["time"],
      _escortDelay : false,
      _escortArrival : true
    }
    await updateChildAttendanceByDateAndChildId(date["date"], childId, checkOut);  
    window.location.reload();
  }
  return (
    <Stack direction={"row"} flexWrap="wrap" gap={3} justifyContent={!matches?"center":"left"}>
      {props.items.map((children) => {
        // const exists

        const arrived = children.report?._arrivalTime;
        const left = children.report?._departureTime;
        const absance = children.report?._absance;
        const late = children.report?._childDelay;
        // console.log(children.report?._absance);
        return (
          <Card key={children._id} sx={{ width: 160, height: 180, position:'relative', backgroundColor: "#3F424C !important", color: "#E3E3E3 !important",
          borderRadius : "5px !important", boxShadow: 3}} >
            {!arrived && !left && !absance && !late && <div className='dot' style={{width:15,height:15, borderRadius:'50%', background:"#FAC852", position:'absolute', top:'5px', left:'5px'}}></div>}
            {late && late!=='false' && <Typography fontSize='14px' sx={{color:'#5FEBDC', position:'absolute', top:'5px', left:'5px'}}>Delay</Typography>}
            <Stack sx={{color: "#E3E3E3"}} alignItems={'center'} gap={1} p={2}>
              <img
                src={children._imageUrl}
                width={50}
                height={50}
                style={{ borderRadius: "50%" }}
                alt=""
              />
              <Typography>{children._firstName} {children._lastName}</Typography>
              <Stack onClick = { () => handleCheckIn(children._id) } style={{ cursor: "pointer" }} justifyContent={!arrived ? 'flex-start' : 'flex-end'}  direction='row' sx={{fontFamily: 'sans-serif', width: 132, height: 22, borderRadius: 5, backgroundColor: !arrived ? '#999999' : '#AAF8D0' }}>              
                { !arrived && <Stack sx={{width: 72, height: 22, borderRadius: 5, backgroundColor: '#596068', fontSize:12, justifyContent:"center", alignItems:"center",}}>Check in</Stack>}
                { !!arrived && <Stack sx={{width: 65, height: 22, borderRadius: 5, backgroundColor: !arrived ? '#596068' : '#1E8D7F', fontSize:14, justifyContent:"center", alignItems:"center",}}>{arrived}</Stack>}
              </Stack>
              <Stack onClick = {() => handleCheckOut(children._id) } style={{ cursor: "pointer" }} justifyContent={!left ? 'flex-start' : 'flex-end'}  direction='row' sx={{fontFamily: 'sans-serif', width: 132, height: 22, borderRadius: 5, backgroundColor: !left ? '#999999' : '#FBBCD7' }}>              
                { !left && <Stack sx={{width: 72, height: 22, borderRadius: 5, backgroundColor: '#596068', fontSize:12, justifyContent:"center", alignItems:"center",}}>Check out</Stack>}
                { !!left && <Stack sx={{width: 65, height: 22, borderRadius: 5, backgroundColor: !arrived ? '#596068' : '#E7307C', fontSize:14, justifyContent:"center", alignItems:"center",}}>{left}</Stack>}
              </Stack>
            </Stack>
          </Card>
        );
      })}
    </Stack>
  );
}


