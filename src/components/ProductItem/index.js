import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Truncate from "react-truncate";
import { useHistory } from "react-router";
import { storeContext } from "../../contexts/StoreContext";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 250,
  },
  description: {
    height: 100,
    marginTop: 20,
  },
});

export default function ProductItem({ data }) {
  const classes = useStyles();

  const { title, images, price, description, id } = data;

  const { addProductToCart } = useContext(storeContext);

  const history = useHistory();

  const [title2, setTitle2] = useState("Добавить товар");

  const Title = () => {
    return <h1 onClick={() => setTitle2("Удалить")}>{title2}</h1>;
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          onClick={() => history.push(`/products/${id}`)}
          className={classes.media}
          image={images[0]}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <Truncate lines={1} ellipsis={"..."}>
              {title}
            </Truncate>
          </Typography>

          <Typography variant="h5">{price} руб</Typography>

          <Typography
            className={classes.description}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            <Truncate lines={3} ellipsis={"..."}>
              {description}
            </Truncate>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => addProductToCart(data)}
          onClick={() => setTitle2("Удалить")}
          size="small"
          color="primary"
        >
          {title2}
        </Button>
        <Button
          onClick={() => history.push(`/products/${id}`)}
          size="small"
          color="primary"
        >
          Далее
        </Button>
      </CardActions>
    </Card>
  );
}