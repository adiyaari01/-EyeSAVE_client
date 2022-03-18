import { Card, Container, Stack, Typography, Avatar } from "@mui/material";

export function List(props) {
  return (
    <Stack justifyContent={"center"} direction={"row"} flexWrap="wrap" gap={3}>
      {props.items.map((children) => {
        // const exists
        return (
          <Card key={children._id} sx={{ width: 280, height: 200, backgroundColor: "#3F424C !important", color: "#E3E3E3 !important",
          borderRadius : "5px !important", boxShadow: 3}} >
            <Stack alignItems={'center'} gap={1} p={2}>
              <img
                src={children._imageUrl}
                width={80}
                height={80}
                style={{ borderRadius: "50%" }}
                alt=""
              />
              <Typography>{children._firstName} {children._lastName}</Typography>
              <Typography>Address:{children._address}</Typography>
              <Typography>Birthday: {children._birthdate}</Typography>
              
              </Stack>
          </Card>
        );
      })}
    </Stack>
  );
}


