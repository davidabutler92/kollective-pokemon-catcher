import React from 'react';
import useStyles from './PokemonDetailsCard.styles';

/** components */
import DetailsCardContent from '../detailsCardContent/DetailsCardContent';

/** material components */
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default function PokemonDetailsCard({ pokemon }) {
  const classes = useStyles();

  return (
    <Card className={classes.card} data-testid="pokemon-details-card">
      <Grid container spacing={2}>
        <Grid item xs={12} className={classes.titleDiv}>
          <Typography component="h2" className={classes.cardTitle}>
            {pokemon?.name}
          </Typography>
          <Typography className={classes.pokemonId}>#{pokemon?.id}</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardMedia
            className={classes.media}
            image={pokemon?.sprites?.front_default}
            title={pokemon.name}
          />
        </Grid>
        <Grid item container xs={12} md={6}>
          <Grid item xs={12}>
            <DetailsCardContent pokemon={pokemon} />
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.typeTitle}>Type</Typography>
            <div className={classes.pokemonTypeContainer}>
              {pokemon?.types?.map(({ type }) => (
                <div key={type?.name} className={classes.pokemonTypeDiv}>
                  <Typography>{type?.name}</Typography>
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
