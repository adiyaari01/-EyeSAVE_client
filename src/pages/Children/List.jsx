import { Card, Stack, Typography, Button } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery'
import ClearIcon from '@mui/icons-material/Clear';
import { deleteChild } from "../../api"

export function List(props) {
  const matches = useMediaQuery('(min-width:600px)');
  
  const handleDelete = (event) => {
    deleteChild(event);
    alert("Deleted successfully");
    window.location.reload();
  };

  return (
    <Stack justifyContent={!matches?"center":"left"} direction={"row"} flexWrap="wrap" gap={3}>
      {props.items.map((children) => {
        return (
          <Card key={children._id} sx={{ width: 270, height: 200, position:'relative', backgroundColor: "#3F424C !important",
          borderRadius : "5px !important", color:'#E3E3E3', boxShadow: 3}} >
      <Button
        sx={{
          position:'absolute', 
          top:'-3px', 
          left:'224px',
          color: "#BC88C9",
        }}
        onClick = { () => handleDelete(children._id)}
      >
          <ClearIcon />
      </Button>
            <Stack alignItems={'center'} gap={1} p={2}>
              <img
                src={children._imageUrl}
                width={80}
                height={80}
                style={{ borderRadius: "50%" }}
                alt=""
              />
              <Typography >{children._firstName} {children._lastName}</Typography>
              <Typography>Address:{children._address}</Typography>
              <Typography>Birthday: {children._birthdate}</Typography>
              
              </Stack>
          </Card>
        );
      })}
    </Stack>
  );
}


