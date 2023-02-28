import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function ShoeCard({ shoe, onDelete }) {
  return (
    <div style={{ flex: 1 }}>
      <Card>
        <CardMedia sx={{ height: 250 }} image={shoe.img} />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            {shoe.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Details</Button>
          <Button size="small" onClick={onDelete}>
            Delete
          </Button>
          <Button size="small">Edit</Button>
        </CardActions>
      </Card>
    </div>
  );
}
