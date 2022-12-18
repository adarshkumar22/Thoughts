import react, { useState, useEffect } from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { postThought, updateThought } from '../../actions/thoughts';

const Form = ({ currentId, setCurrentId }) => {
    const classes = useStyles();
    const [thoughtData, setThoughtData] = useState({ creator: '', title: '', message: '', tags: ''});
    const dispatch = useDispatch();

    const thought = useSelector((state) => (currentId ? state.thoughts.find((p) => p._id === currentId) : null));
  
    useEffect(() => {
      if(thought){
        setThoughtData(thought);
      }
    }, [thought])

    const clear = () => {
      setCurrentId(0);
      setThoughtData({ creator: '', title: '', message: '', tags: ''});
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(currentId) {
          dispatch(updateThought(currentId, thoughtData));
        } else { 
          dispatch(postThought(thoughtData));
        }
        clear();
    };
    return (
        <Paper className={classes.paper}>
          <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6"> { currentId ? 'Editing' : 'Creating' } your Thought</Typography>
            <TextField name="creator" variant="outlined" label="Creator" fullWidth  value={thoughtData.creator}onChange={(e) => setThoughtData({ ...thoughtData, creator: e.target.value })} />
            <TextField name="title" variant="outlined" label="Title" fullWidth value={thoughtData.title} onChange={(e) => setThoughtData({ ...thoughtData, title: e.target.value })} />
            <TextField name="tags" variant="outlined" label="Tags (coma separated, don't give space)" fullWidth value={thoughtData.tags} onChange={(e) => setThoughtData({ ...thoughtData, tags: e.target.value.split(',') })} />
            <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={thoughtData.message} onChange={(e) => setThoughtData({ ...thoughtData, message: e.target.value })} />
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" fullWidth type="submit">Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
          </form>
        </Paper>
      );
}

export default Form;