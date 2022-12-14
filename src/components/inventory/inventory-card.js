import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CustomizedDialogs from './popup'
function InventoryCard(props) {
  return (
    <Card sx={{boxShadow: 20,width:"20pc"}}>
      <CardMedia
        component="img"
        height="180"
        image={props.Img}
        alt="green iguana"
      />
      <CardContent sx={{padding: "28px 24px"}} >
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center"}}>
        {props.Name}
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:"space-between",padding:"8px 25px"}}>
        <h5>No's:{props.count}</h5>
        <CustomizedDialogs Name="view" Img={props.Img} component_name={props.Name} count={5} />
      </CardActions>
    </Card>
  )
}
export default InventoryCard;