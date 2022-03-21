import { Card, Typography, Stack } from "@mui/material";

export const List = ({ items }) => {
  return (
    <Stack justifyContent={"center"} direction={"row"} flexWrap="wrap" gap={3}>
      {items.map((staff) => {
        // const exists
        return (
          <Card
            key={staff._id}
            sx={{
              width: 280,
              height: 200,
              backgroundColor: "#3F424C !important",
              color: "#E3E3E3 !important",
              borderRadius: "5px !important",
              boxShadow: 3,
            }}
          >
            <Stack alignItems={"center"} gap={1} p={2}>
              <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nationalgeographic.com%2Fanimals%2Fmammals%2Ffacts%2Fdomestic-cat&psig=AOvVaw3fpF1n0nZzP0W2O8DbLlZL&ust=1647769548673000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIjBhYfy0fYCFQAAAAAdAAAAABAI"
                width={80}
                height={80}
                style={{ borderRadius: "50%" }}
                alt=""
              />
              <Typography>
                {staff._firstName} {staff._lastName}
              </Typography>
            </Stack>
          </Card>
        );
      })}
    </Stack>
  );
};
