import { Card, Container, Stack, Typography, Avatar } from "@mui/material";

export function List(props) {
  return (
    <Stack justifyContent={"center"} direction={"row"} flexWrap="wrap" gap={3}>
      {props.items.map((children) => {
        // const exists
        return (
          <Card key={children._id} sx={{ width: 160, height: 180, backgroundColor: "#3F424C !important", color: "#E3E3E3 !important",
          borderRadius : "5px !important", boxShadow: 3}} >
            <Stack alignItems={'center'} gap={1} p={2}>
              <img
                src={children._imageUrl}
                width={50}
                height={50}
                style={{ borderRadius: "50%" }}
                alt=""
              />
              <Typography>{children._firstName} {children._lastName}</Typography>
              <Stack sx={{width: 130, height: 20, borderRadius: 5, backgroundColor: '#999999', }}>              
                <Stack sx={{width: 65, height: 20, borderRadius: 5, backgroundColor: '#596068', fontSize:14, alignItems:"center",}}>Check in</Stack>
              </Stack>
              <Stack sx={{width: 130, height: 20, borderRadius: 5, backgroundColor: '#AAF8D0'}}>              
                <Stack sx={{width: 65, height: 20, borderRadius: 5, backgroundColor: '#1E8D7F', fontSize:14,}}>{children._arrivalTime}</Stack>
              </Stack>
              <Stack sx={{width: 130, height: 20, borderRadius: 5, backgroundColor: '#FBBCD7'}}>              
                <Stack sx={{width: 65, height: 20, borderRadius: 5, backgroundColor: '#E7307C', fontSize:14,}}>{children._departureTime}</Stack>
              </Stack>
            </Stack>
            <Typography>{children._firstName} {children._lastName}</Typography>
              <Stack sx={{width: 130, height: 20, borderRadius: 5, backgroundColor: '#999999',}}>              
                <Stack sx={{width: 65, height: 20, borderRadius: 5, backgroundColor: '#596068', fontSize:14,  alignItems:"center",}}>Check out</Stack>
              </Stack>
          </Card>
        );
      })}
    </Stack>
  );
}


