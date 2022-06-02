import { Button, Card, Stack, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import useMediaQuery from "@mui/material/useMediaQuery";
import { deleteEmployee } from "../../api";
import { getUserFromSessionStorage } from "../../utils";

export function List(props) {
  const matches = useMediaQuery("(min-width:600px)");
  const user = getUserFromSessionStorage();

  const handleDelete = (event) => {
    deleteEmployee(event);
    alert("Deleted successfully");
    window.location.reload();
  };

  return (
    <Stack
      justifyContent={!matches ? "center" : "left"}
      direction={"row"}
      flexWrap="wrap"
      gap={3}
    >
      {props.items.map((staff) => {
        // const exists
        return (
          <Card
            key={staff._id}
            sx={{
              width: 280,
              height: 280,
              position: "relative",
              backgroundColor: "#3F424C !important",
              borderRadius: "5px !important",
              color: "#E3E3E3",
              boxShadow: 3,
            }}
          >
            {user?._position === "Manager" && (
              <>
                <Button
                  sx={{
                    position: "absolute",
                    top: "-3px",
                    left: "234px",
                    color: "#BC88C9",
                  }}
                  onClick={() => handleDelete(staff._id)}
                >
                  <ClearIcon />
                </Button>
              </>
            )}

            <Stack alignItems={"center"} gap={1} p={2}>
              <img
                src={staff._imageUrl}
                width={80}
                height={80}
                style={{ borderRadius: "50%" }}
                alt=""
              />
              <Typography>
                {staff._firstName} {staff._lastName}
              </Typography>
              <Typography>Position: {staff._position}</Typography>
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
