import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Fab from '@material-ui/core/Fab';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { get, del } from '../../../util/firebase/RequestFire'
import ModalVisualizar from './ModalVisualizar'

const columns = [
    { id: 'numero', label: '#Numero', minWidth: 170 },
    { id: 'cliente', label: 'Cliente', minWidth: 100 },
    { id: 'bairro', label: 'Bairro', minWidth: 100 },
    { id: 'telefone', label: 'Telefone', minWidth: 100 },
    { id: 'visualizar', label: 'Visualizar', maxWidth: 80 },
    { id: 'deletar', label: 'Deletar', maxWidth: 80 },
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export default function StickyHeadTable({ att }) {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [rows, setRows] = React.useState([])

    function createData(numero, cliente, bairro, telefone, funDel, id, att) {

        let visualizar = <ModalVisualizar fun={att} id={id} />

        let deletar = <Fab size="small" color="secondary" aria-label="edit" onClick={() => funDel(id)}
            style={{ backgroundImage: 'linear-gradient(90deg, #c21616 0%, #630c0c 100%)' }}><DeleteForeverIcon /></Fab>

        return { numero, cliente, bairro , telefone, visualizar, deletar };
    }


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const atualiza = () => {
        get().then(s => {
            let arrayAux = []
            Object.values(s.clientes).map((map, index) =>
                arrayAux.push(createData(map.nome, map.nomeContato, map.telefone, map.email, dele, Object.keys(s.clientes)[index], atualiza))
            )
            setRows(arrayAux)
        })
    }

    const dele = (id) => {
        del('/clientes/', id).then(s => atualiza())
    }

    React.useEffect(() => {
        atualiza()
    }, [])

    React.useEffect(() => {
        if (att === true) {
            atualiza()
        }
    }, [att])

    return (
        <div>
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map(column => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={index} style={{ backgroundColor: 'rgba(100, 210, 96, 0.3)'}}>
                                        {columns.map((column, indexC) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={indexC} align={column.align}>
                                                    {column.format && typeof value === 'number' ? column.format(value) : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
}

