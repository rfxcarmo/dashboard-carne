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
import Button from '@material-ui/core/Button';
import { Link, useRouteMatch } from 'react-router-dom'
import Fab from '@material-ui/core/Fab'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { FiltroProdutoTipoFire , GetFire } from '../../../util/firebase/RequestFire'

const columns = [
    { id: 'name', label: 'Nome', minWidth: 170 },
    { id: 'VKG', label: 'Valor por KG', minWidth: 100 },
    { id: 'tipo', label: 'Tipo', minWidth: 100 },
    { id: 'editar', label: '', minWidth: 100 },
    { id: 'deletar', label: '', minWidth: 100 },
];

function createData(name, VKG, tipo, editar, deletar) {
    editar = <Fab
        size="small"
        color="primary"
        aria-label="edit"
        style={{ backgroundColor: 'rgb(254, 231, 25)' }}
    ><EditIcon /></Fab>
    deletar = <Fab size="small" color="secondary" aria-label="edit"><DeleteForeverIcon /></Fab>
    
    return { name, VKG, tipo , editar, deletar} //, population, size, density };
}

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export default function StickyHeadTable({ set }) {
    let { url } = useRouteMatch()
    
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [rows, setRows] = React.useState([])
    const [tipo , setTipo] = React.useState('')

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    React.useEffect(() => {
        set('PRODUTOS')
            GetFire("produtos").then(data => {

                let rowsAux = []
                data.docs.map(map => 
                    rowsAux.push(map.data())
                )

                let arrayAux = []
                rowsAux.map(map => 
                    arrayAux.push(createData(map.nome, map.valor, map.tipo))
                )
                setRows(arrayAux)

            })
    }, [])

    React.useEffect(() => {
        if(tipo !== ''){
            FiltroProdutoTipoFire("produtos", tipo).then(data => {

                let rowsAux = []
                data.docs.map(map =>
                    rowsAux.push(map.data())
                )

                let arrayAux = []
                rowsAux.map(map =>
                    arrayAux.push(createData(map.nome, map.valor, map.tipo))
                )
                setRows(arrayAux)
            })
        }
    }, [tipo])

    return (
        <div >
            <div style={{ width : '100%' }}>
                <ButtonGroup color="secondary" aria-label="outlined secondary button group" style={{ width: '100%' }}>
                    <Button onClick={() => setTipo('bovino')}>Bovino</Button>
                    <Button onClick={() => setTipo('suino')}>Suino</Button>
                    <Button onClick={() => setTipo('aviario')}>Aviario</Button>
                    <Button onClick={() => setTipo('peixe')}>Peixe</Button>
                </ButtonGroup>
            </div>
            <br />
            <div style={{ marginBottom: '20px' }}>
                <Button variant="contained" color="primary" component={Link} to={`${url}/cadastro`}>
                    Cadastrar
                </Button>
            </div>

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
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map(column => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
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

