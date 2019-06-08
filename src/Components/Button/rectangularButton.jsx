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
            {/* <Button variant="contained" className={classes.button}>
                Default
            </Button> */}
            <Button variant="contained" style={{backgroundColor: "#95cc41", color: "white", marginBottom: "70px"}} className={classes.button} href={link} target="_blank">
                Achetez sur TicketMaster
            </Button>
            {/* <Button variant="contained" color="secondary" className={classes.button}>
                Secondary
            </Button>
            <Button variant="contained" color="secondary" disabled className={classes.button}>
                Disabled
            </Button>
            <Button variant="contained" href="#contained-buttons" className={classes.button}>
                Link
            </Button>
            <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" component="span" className={classes.button}>
                Upload
                </Button>
            </label> */}
        </div>
    );
}