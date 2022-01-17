import react from 'react';
import Thought from './Thought/Thought.js';
import useStyles from './styles';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

const Thoughts = ({ setCurrentId }) => {
    const classes = useStyles();
    const thoughts = useSelector((state) => state.thoughts);
    console.log(thoughts);

    return (
        !thoughts.length ? <CircularProgress/> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
              {thoughts.map((thought) => (
                <Grid key={thought._id} item xs={12} sm={6} md={6}>
                  <Thought thought={thought} setCurrentId={setCurrentId}/>
                </Grid>
              ))}
            </Grid>
          )
    )
}

export default Thoughts;