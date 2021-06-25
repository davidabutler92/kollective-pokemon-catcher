import React, { useState } from 'react';
import useStyles from './PokemonCard.styles';

/** material ui components */
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function PokemonCard({
  index,
  pokemon,
  handleClickOpen,
  setPokemonIndex,
}) {
  const [isDisabled, setIsDisabled] = useState(true);
  const classes = useStyles();

  const handleCardActionClick = () => {
    setIsDisabled(!isDisabled);
    setPokemonIndex(index);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleCardActionClick}>
        <CardHeader title={pokemon?.name} className={classes.text} />
        <CardMedia
          image={pokemon.sprites.front_default}
          className={classes.media}
        />
        <CardContent>
          <Typography className={classes.text}>
            Type: {pokemon?.types[0]?.type?.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardAction}>
        <Button
          onClick={handleClickOpen}
          variant="contained"
          className={classes.button}
          disabled={isDisabled}
        >
          Catch!
        </Button>
      </CardActions>
    </Card>
  );
}
