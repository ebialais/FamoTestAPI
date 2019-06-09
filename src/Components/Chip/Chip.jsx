import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import './Chip.css';

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
        <div >
            {items.map(item => {
                return (
                    <Chip 
                        id="Chips"
                        key={item.genre.id}
                        label={item.genre.name}
                        className={classes.chip}
                    />
                );
            })}
            {items.map(item => {
                return (
                    item.segment != null && <Chip 
                                                id="Chips"
                                                key={item.segment.id}
                                                label={item.segment.name}
                                                className={classes.chip}
                                            />
                );
            })}
            {items.map(item => {
                return (
                    item.subGenre != null && <Chip 
                                                id="Chips"
                                                key={item.subGenre.id}
                                                label={item.subGenre.name}
                                                className={classes.chip}
                                            />
                );
            })}
        </div>
    );
}

export default ChipsArray;