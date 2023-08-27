import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { CardProps } from "./interface";

export default function ActionAreaCard(props: CardProps) {
  return (
    <Card>
      <CardActionArea>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            height: "100%",
          }}
        >
          <CardMedia
            component="img"
            height="140"
            width="140"
            image={props.imageSrc}
            alt="image"
            sx={{
              borderRadius: "50%",
              objectFit: "cover",
              width: "140px",
              height: "140px",
            }}
          />
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
