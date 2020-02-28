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
import Fab from '@material-ui/core/Fab';
import { Link, useRouteMatch } from 'react-router-dom'
import Modal from './ModalCadastroFrigo'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { GetFire, DeleteFire} from '../../../util/firebase/RequestFire'


const columns = [
    { id: 'id', label: 'ID', minWidth: 100 },
    { id: 'name', label: 'Nome', minWidth: 170 },
    { id: 'cnpj', label: 'CNPJ', minWidth: 100 },
    { id: 'email', label: 'Email', minWidth: 100 },
    { id: 'telefone', label: 'Telefone', minWidth: 100 },
    { id: 'editar', label: '', minWidth: 100 },
    { id: 'deletar', label: '', minWidth: 100 },    
];

function createData(id , name, cnpj, email, telefone) {
    let editar = <Modal fun={1} id= {id}/>    
    
    let deletar = <Fab size="small" color="secondary" onClick={() => DeleteFire("clientes", id)} aria-label="edit"><DeleteForeverIcon /></Fab>   
    
    return { id, name, cnpj, email, telefone, editar, deletar};
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

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    
    React.useEffect(() => {
        set('FRIGORIFICOS')

        GetFire("clientes").then(data => {
            let auxID = []
            data.docs.map(m => auxID.push(m.id))

            let rowsAux = []
            data.docs.map( map => {
                rowsAux.push(map.data())
            })
            
            let arrayAux = []
            rowsAux.map((map, i) => {
                arrayAux.push(createData(auxID[i], map.nome, map.cnpj, map.email, map.telefone))
            })
            setRows(arrayAux)              
        
        })
    }, [])

    return (
        <div>

            <div style={{ marginBottom: '20px' }}>
                <Modal fun={0} id={null}/>
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
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index)=> {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                        {columns.map((column , indexC) => {
                                            const value = row[column.id];
                                            if(column.id === 'id'){
                                                return (
                                                    <TableCell key={indexC} align={column.align} component={Link} to={`${url}/detalhes?id=${value}`}>
                                                        {column.format && typeof value === 'number' ? column.format(value) : value}
                                                    </TableCell>
                                                );
                                            }
                                            return (
                                                <TableCell key={indexC} align={column.align} >
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

