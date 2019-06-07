import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';
import './Table.css';
import getDate from '../../Util/getDate';
import Fab from '@material-ui/core/Fab';

const useStyles2 = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    table: {
        minWidth: 500,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
}));

function TablePag(props) {
    const { updatePage, pageInit, items, recherche } = props
    const classes = useStyles2();
    
    function goBack(){
        let newPage = pageInit - 1
        updatePage(newPage)
    }
    function goNext(){
        let newPage = pageInit + 1
        updatePage(newPage)
    }

    let itemsFiltered = items.filter(item => {
        let search = item.name
        return search.toLowerCase().includes(recherche)
    })
    return (
        <Paper className={classes.root}>
            <div className={classes.tableWrapper}>
                <Table  className={classes.table}>
                    <TableBody>
                        {items === [] ? <Loader /> : itemsFiltered.map(item => (
                            console.log(item.name),
                            <TableRow key={ item.id } hover={ true } className="TableRow" >
                                    <TableCell align="right"  >
                                        <Link to={`/Infos/${item.id}`} className="routeInfos">
                                            {getDate(item.dates.start.localDate)}
                                        </Link>
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <Link to={`/Infos/${item.id}`} className="routeInfos">
                                            {item.name}
                                        </Link>
                                    </TableCell>
                                    <TableCell align="right" className="lastCell">
                                        <Link to={`/Infos/${item.id}`} className="routeInfos">
                                            <div id="divImg">
                                                { item.images && item.images.length > 0 ? 
                                                <img src={item.images[0].url}  id="imageCell" alt={item.name} /> : 
                                                "Pas d'image" }
                                            </div>
                                        </Link>
                                    </TableCell>
                            </TableRow> 
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow id="paginationRow">
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell id="paginationCell">
                                <Fab onClick={() => goBack()} className="tabButton" disabled={pageInit === 0}>
                                    <img src="/assets/backIcon.svg" />
                                </Fab>
                                <div>{pageInit}</div>
                                <Fab onClick={() => goNext()} className="tabButton">
                                    <img src="/assets/nextIcon.svg" />
                                </Fab>
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </Paper>
    );
}

export default TablePag;
