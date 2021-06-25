import React from 'react';
import useStyles from './DetailsCardContent.styles';

/** material components */
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function DetailsCardContent({ pokemon }) {
  const classes = useStyles();
  const convertDmToMeter = (num) => {
    return num / 10;
  };

  const convertDgToKg = (num) => {
    return num / 10;
  };

  return (
    <CardContent
      className={classes.cardContent}
      data-testid="details-card-content"
    >
      <Grid item container spacing={2}>
        <Grid item xs={6}>
          <Typography className={classes.boldWhite}>Height:</Typography>
          <Typography className={classes.thinWhite}>
            {convertDmToMeter(pokemon?.height)} m
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography className={classes.boldWhite}>Weight:</Typography>
          <Typography className={classes.thinWhite}>
            {convertDgToKg(pokemon?.weight)} kg
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography className={classes.boldWhite}>Ability:</Typography>
          <Typography className={classes.thinWhite}>
            {pokemon?.abilities?.[0]?.ability?.name}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography className={classes.boldWhite}>HP:</Typography>
          <Typography className={classes.thinWhite}>
            {pokemon?.stats?.[0]?.base_stat}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography className={classes.boldWhite}>Attack:</Typography>
          <Typography className={classes.thinWhite}>
            {pokemon?.stats?.[1]?.base_stat}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography className={classes.boldWhite}>Defense:</Typography>
          <Typography className={classes.thinWhite}>
            {pokemon?.stats?.[2]?.base_stat}
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  );
}
