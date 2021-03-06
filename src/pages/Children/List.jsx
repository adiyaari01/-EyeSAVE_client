import { Card, Stack, Typography, Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import ClearIcon from "@mui/icons-material/Clear";
import { deleteChild } from "../../api";
import { getUserFromSessionStorage } from "../../utils";

export function List(props) {
  const matches = useMediaQuery("(min-width:600px)");
  const user = getUserFromSessionStorage();

  const handleDelete = (event) => {
    deleteChild(event);
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
      {props.items.map((children) => {
        return (
          <Card
            key={children._id}
            sx={{
              width: 270,
              height: 200,
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
                    left: "224px",
                    color: "#BC88C9",
                  }}
                  onClick={() => handleDelete(children._id)}
                >
                  <ClearIcon />
                </Button>
              </>
            )}

            <Stack alignItems={"center"} gap={1} p={2}>
              <img
                src={children._imageUrl}
                width={80}
                height={80}
                style={{ borderRadius: "50%" }}
                alt=""
              />
              <div justifyContent="left">
                <Typography>
                  Name: {children._firstName} {children._lastName}
                </Typography>
                { children?._address && <Typography>Address: {children._address}</Typography>}
                { children._birthdate && <Typography>Birthday: {children._birthdate}</Typography>}
              </div>
            </Stack>
          </Card>
        );
      })}
    </Stack>
  );
}
