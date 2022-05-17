import { Card, Stack, Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery'

export function List(props) {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <Stack justifyContent={!matches?"center":"left"} direction={"row"} flexWrap="wrap" gap={3}>
      {props.items.map((staff) => {
        // const exists
        return (
          <Card key={staff._id} sx={{ width: 280, height: 280, backgroundColor: "#3F424C !important",
          borderRadius : "5px !important", color:'#E3E3E3', boxShadow: 3}} >
            <Stack alignItems={'center'} gap={1} p={2}>
              <img
                src={staff._imageUrl}
                width={80}
                height={80}
                style={{ borderRadius: "50%" }}
                alt=""
              />
              <Typography >{staff._firstName} {staff._lastName}</Typography>
              {/* <Typography>Position: {staff._position}</Typography> */}
              <Typography>Phone: {staff._phone}</Typography>
              <Typography>Address: {staff._address}</Typography>
              <Typography>Birthday: {staff._birthdate}</Typography>
              
              </Stack>
          </Card>
        );
      })}
    </Stack>
  );
}


