import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

export default function ContainedButtons(props) {
    const classes = useStyles();
    const { link } = props

    return (
        <div>
            <Button 
                variant="contained" 
                style={{backgroundColor: "#95cc41", color: "white", marginBottom: "70px"}} 
                className={classes.button} 
                href={link} 
                target="_blank"
            >
                Achetez sur TicketMaster
            </Button>
        </div>
    );
}