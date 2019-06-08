import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Prices.css';


function PriceTable(props) {
    const { prices } = props;

    return (
        <Paper >
            <Table size='small' id="PriceTable">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" className="cellPrice">Type</TableCell>
                        <TableCell align="center" className="cellPrice">Mini</TableCell>
                        <TableCell align="center" className="cellPrice">Maxi</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { prices != null && prices.map(price => (
                        <TableRow key={price.min}>
                            <TableCell align="center" className="cellPrice">{price.type}</TableCell>
                            <TableCell align="center" className="cellPrice">{price.min + " " + price.currency}</TableCell>
                            <TableCell align="center" className="cellPrice">{price.max + " " + price.currency}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}

export default PriceTable;