import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from "react-router-dom";
import './Card.css'

export default function MediaCard(props) {
  return (
    <Card
    className='card' 
    sx={{ width: '245px', minHeight: '300px' }}>
      <Link className='cardLink' to={`/products/${props.id}`} style={{textDecoration:"none", color: "black"}} >
      <CardMedia
        className='productImg'
        component="img"
        alt={props.name}
        sx={{ maxWidth: 170 }}
        height="170"
        image={props.image}
      />
      <CardContent sx={{ height: 80 }} >
        <Typography sx={{ fontSize: 20 }} textAlign="center" gutterBottom variant="h5" component="div">
          ${props.price}
        </Typography>
        <Typography sx={{ fontSize: 16}} textAlign="center" variant="body2" color="text.secondary">
          Modelo: {props.name}
        </Typography>
        <Typography sx={{ fontSize: 12}} textAlign="center" variant="body2" color="text.secondary">
          Ancho: {props.ancho}cm.
        </Typography>
        <Typography sx={{ fontSize: 12}} textAlign="center" variant="body2" color="text.secondary">
          Largo: {props.largo}cm.
        </Typography>
        <Typography sx={{ fontSize: 12}} textAlign="center" variant="body2" color="text.secondary">
          Alto: {props.alto}cm.
        </Typography>
      </CardContent>
      </Link>
      <CardActions className="BotonWsp">
        <a style={{textDecoration:"none"}} href="https://wa.me/message/44EGGQV4XF5JG1?src=qr">
      <Button  variant="contained"  endIcon={<WhatsAppIcon />}>
  Consultar
</Button>
  </a>
      </CardActions>
      
    </Card>
  );
}
