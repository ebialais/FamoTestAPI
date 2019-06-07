import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import UndoIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export default function FloatingActionButtons() {
    const classes = useStyles();

    return (
        <div>
            {/* <Fab color="primary" aria-label="Add" className={classes.fab}>
                <UndoIcon />
            </Fab> */}
            <Fab style={{backgroundColor: "#e7b142", position: "absolute", top: "10px", right: "10px"}} aria-label="Edit" className={classes.fab}>
                <img src="/assets/closeIcon.svg" />
            </Fab>
            {/* <Fab variant="extended" aria-label="Delete" className={classes.fab}>
                <NavigationIcon className={classes.extendedIcon} />
                Extended
            </Fab>
            <Fab disabled aria-label="Delete" className={classes.fab}>
                <DeleteIcon />
            </Fab> */}
        </div>
    );
}