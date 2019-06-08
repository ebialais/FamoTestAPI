import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 450,
    },
}));

function PriceTable(props) {
    const classes = useStyles();
    const { prices } = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Type</TableCell>
                        <TableCell align="center">Mini</TableCell>
                        <TableCell align="center">Maxi</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { prices != null && prices.map(price => (
                        <TableRow key={price.min}>
                            <TableCell align="center">{price.type}</TableCell>
                            <TableCell align="center">{price.min + " " + price.currency}</TableCell>
                            <TableCell align="center">{price.max + " " + price.currency}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}

export default PriceTable;