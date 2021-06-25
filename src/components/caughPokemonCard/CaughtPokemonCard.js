import React from 'react';
import { useHistory } from 'react-router';
import { handleCardActionClick } from './CaughtPokemonCard.helpers';
import useStyles from './CaughtPokemonCard.styles';

/** material components */
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default function CaughtPokemonCard({ pokemon, index }) {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => handleCardActionClick({ index, history })}>
        <CardHeader title={pokemon.name} className={classes.text} />
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
    </Card>
  );
}
