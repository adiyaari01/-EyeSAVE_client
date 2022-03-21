import { Card, Container, Stack, Typography, Avatar } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';

export function List(props) {
  return (
    <Stack justifyContent={"center"} direction={"row"} flexWrap="wrap" gap={3}>
      {props.items.map((children) => {
        // const exists

        const arrived = children.report?._arrivalTime;
        const left = children.report?._departureTime;
        const absance = children.report?._absance;

        return (
          <Card key={children._id} sx={{ width: 160, height: 180, backgroundColor: "#3F424C !important", color: "#E3E3E3 !important",
          borderRadius : "5px !important", boxShadow: 3}} >
            {/* {!arrived && !left && !absance && <CircleIcon fontSize='small' color="#E7307C"></CircleIcon>} */}
            <Stack sx={{color: "#E3E3E3"}} alignItems={'center'} gap={1} p={2}>
              <img
                src={children._imageUrl}
                width={50}
                height={50}
                style={{ borderRadius: "50%" }}
                alt=""
              />

              <Typography>{children._firstName} {children._lastName}</Typography>
              <Stack justifyContent={!arrived ? 'flex-start' : 'flex-end'}  direction='row' sx={{fontFamily: 'sans-serif', width: 132, height: 22, borderRadius: 5, backgroundColor: !arrived ? '#999999' : '#AAF8D0' }}>              
                { !arrived && <Stack sx={{width: 72, height: 22, borderRadius: 5, backgroundColor: '#596068', fontSize:12, justifyContent:"center", alignItems:"center",}}>Check in</Stack>}
                { !!arrived && <Stack sx={{width: 65, height: 22, borderRadius: 5, backgroundColor: !arrived ? '#596068' : '#1E8D7F', fontSize:14, justifyContent:"center", alignItems:"center",}}>{arrived}</Stack>}
              </Stack>

              <Stack justifyContent={!left ? 'flex-start' : 'flex-end'}  direction='row' sx={{fontFamily: 'sans-serif', width: 132, height: 22, borderRadius: 5, backgroundColor: !left ? '#999999' : '#FBBCD7' }}>              
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


