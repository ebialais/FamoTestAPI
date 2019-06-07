import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';
import './Table.css';
import getDate from '../../Util/getDate';
import Fab from '@material-ui/core/Fab';

const useStyles1 = makeStyles(theme => ({
    root: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing(2.5),
    },
}));


// function TablePaginationActions(props) {
//     const classes = useStyles1();
//     const theme = useTheme();
//     const { count, rowsPerPage, onChangePage, page } = props;

//     function handleFirstPageButtonClick(event) {
//         onChangePage(event, 0);
//     }

//     function handleBackButtonClick(event) {
//         onChangePage(event, page - 1);
//     }

//     function handleNextButtonClick(event) {
//         onChangePage(event, page + 1);
//     }

//     function handleLastPageButtonClick(event) {
//         onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
//     }
//     return (
//         <div className={classes.root}>
//             <IconButton
//                 onClick={handleFirstPageButtonClick}
//                 disabled={page === 0}
//                 aria-label="First Page"
//             >
//                 {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
//             </IconButton>
//             <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="Previous Page">
//                 {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//             </IconButton>
//             <IconButton
//                 onClick={handleNextButtonClick}
//                 disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//                 aria-label="Next Page"
//             >
//                 {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//             </IconButton>
//             <IconButton
//                 onClick={handleLastPageButtonClick}
//                 disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//                 aria-label="Last Page"
//             >
//                 {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
//             </IconButton>
//         </div>
//     );
// }

// TablePaginationActions.propTypes = {
//     count: PropTypes.number.isRequired,
//     onChangePage: PropTypes.func.isRequired,
//     page: PropTypes.number.isRequired,
//     rowsPerPage: PropTypes.number.isRequired,
// };

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
    // function goUpdate (){
    //     updatePage(page)
    //     console.log("coucou2", page)
    // }

    // const emptyRows = rowsPerPage - Math.min(rowsPerPage, props.items.length - page * rowsPerPage);

    // function handleChangePage(event, newPage) {
    //     setPage(newPage);
    // }

    // function handleChangeRowsPerPage(event) {
    //     setRowsPerPage(parseInt(event.target.value, 10));
    // }

    let itemsFiltered = items.filter(item => {
        let search = item.name + " " + item._embedded.venues[0].name
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
                            {/* <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                colSpan={3}
                                count={props.items.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: { 'aria-label': 'Rows per page' },
                                    native: true,
                                }}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            /> */}
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </Paper>
    );
}

export default TablePag;
