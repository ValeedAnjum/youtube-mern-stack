import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
const CardLocal = ({ classes, item: { Icon, Text }, videoLabelHan }) => {
  return (
    <Grid item sm={2}>
      <Card className={classes.card} onClick={() => videoLabelHan(Text)}>
        <CardContent>
          {Icon ? <Icon className={classes.cardIcon} /> : null}
          <Typography className={classes.cardHeading}>
            {Text ? Text : null}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardLocal;
