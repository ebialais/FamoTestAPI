import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: theme.spacing(0.5),
    },
    chip: {
        margin: theme.spacing(0.5),
    },
}));

function ChipsArray(props) {
    const classes = useStyles();
    const { items } = props;

    return (
        <Paper className={classes.root}>
            {items.map(item => {
                return (
                <Chip
                    key={item.genre.id}
                    label={item.genre.name}
                    className={classes.chip}
                />
                );
            })}
            {items.map(item => {
                return (
                <Chip
                    key={item.segment.id}
                    label={item.segment.name}
                    className={classes.chip}
                />
                );
            })}
            {items.map(item => {
                return (
                <Chip
                    key={item.subGenre.id}
                    label={item.subGenre.name}
                    className={classes.chip}
                />
                );
            })}
        </Paper>
    );
}

export default ChipsArray;