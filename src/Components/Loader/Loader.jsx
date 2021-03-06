import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Loader.css';

const useStyles = makeStyles(theme => ({
    progress: {
        margin: theme.spacing(2),
        color: "#95cc41"
    },
}));

export default function Loader() {
    const classes = useStyles();
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        function tick() {
            // reset when reaching 100%
            setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 1));
        }

        const timer = setInterval(tick, 20);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div id="Loader">
            <CircularProgress className={classes.progress} variant="determinate" value={progress} />
            {/* <CircularProgress
                className={classes.progress}
                variant="determinate"
                value={progress}
                color="secondary"
            /> */}
        </div>
    );
}