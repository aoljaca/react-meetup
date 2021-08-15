import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: "7%",
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'rgb(175, 238, 238)',
    textAlign: 'center',
    width: "50%",
    color: "black",
  }
}));

export default function HomeBody(props) {
  const classes = useStyles();
  const ageGroups = [
      "18-22",
      "22-24",
      "24-26",
      "26-28",
      "29-30",
  ]

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.container}>
        {ageGroups.map((age, index) => (
            <Grid item className={classes.row}>
                <Button className={classes.button} onClick={props.onClick(index)}>{age}</Button>
            </Grid>
        ))}
      </Grid>
    </div>
  );
}
