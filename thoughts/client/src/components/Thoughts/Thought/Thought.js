import react from 'react';
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import EditIcon from '@material-ui/icons/Edit';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteThought, likeThought } from '../../../actions/thoughts';

const Thought = ({ thought, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card}>
            <div className={classes.overlay}>
                <Typography variant="h6">{thought.creator}</Typography>
                <Typography variant="body2" className={classes.ago}>{moment(thought.createdAt).fromNow()}</Typography>
            </div>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{thought.title}</Typography>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" component="h2">{thought.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{thought.message}</Typography>
            </CardContent>
            <div className={classes.combineBtn}>
                <Button size="small" color="primary" onClick={() => dispatch(likeThought(thought._id))}><ThumbUpAltIcon fontSize="small" /> &nbsp;{thought.likeCount} </Button>
                <Button size="small" color="primary" onClick={() => setCurrentId(thought._id)}> <EditIcon /> </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deleteThought(thought._id))}> <DeleteIcon /></Button>
            </div>
        </Card>
    )
}

export default Thought;