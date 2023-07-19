import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function Character({ name, image }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        image={image}
        title="Citadel of Ricks"
        sx={{ height: "250px", width: "250px" }}
      />
      <CardContent>
        <Typography variant="h5" textAlign={"center"}>
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}
