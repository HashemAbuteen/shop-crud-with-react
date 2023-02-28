import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function ShoeCard({ shoe, onDelete }) {
  function goToDetails() {
    window.location.href = "/shoe/" + shoe.id;
  }
  return (
    <div style={{ flex: 1 }}>
      <Card>
        <CardMedia sx={{ height: 250 }} image={shoe.img} />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            {shoe.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {shoe.price} $
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={goToDetails}>
            Details
          </Button>
          <Button size="small" onClick={onDelete}>
            Delete
          </Button>
          <Button size="small">Edit</Button>
        </CardActions>
      </Card>
    </div>
  );
}
