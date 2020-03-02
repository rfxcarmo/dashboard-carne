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
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { GetFire } from '../../../util/firebase/RequestFire'


const columns = [
    { id: 'name', label: 'Nome', minWidth: 170 },
    { id: 'cnpj', label: 'CNPJ', minWidth: 100 },
    { id: 'email', label: 'Email', minWidth: 100 },
    { id: 'telefone', label: 'Telefone', minWidth: 100 },
    { id: 'status', label: 'Status', maxWidth: 80 },
    { id: 'editar', label: 'Editar', maxWidth: 80 },
    { id: 'deletar', label: 'Deletar', maxWidth: 80 },    
];

function createData(name, cnpj, email, telefone , statusC) {
    let status = <Fab size="small" color="secondary" aria-label="edit" style={{ backgroundColor: statusC }}></Fab>  
    let editar = <Fab  
    size="small" 
    color="primary" 
    aria-label="edit"
    style={{ backgroundImage: 'linear-gradient(90deg, #2fcf24 0%, #10640a 100%)' }}
    ><EditIcon /></Fab>    
    
    let deletar = <Fab size="small" color="secondary" aria-label="edit" style={{ backgroundImage: 'linear-gradient(90deg, #c21616 0%, #630c0c 100%)' }}><DeleteForeverIcon /></Fab>   
    
    return { name, cnpj, email, telefone, status, editar, deletar};
}

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export default function StickyHeadTable() {
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
            

        GetFire("clientes").then(data => {
            let rowsAux = []
            data.docs.map( map => rowsAux.push(map.data()))
            
            let arrayAux = []
            rowsAux.map(map => arrayAux.push(createData(map.nome, map.cnpj, map.email, map.telefone, map.status)))
            setRows(arrayAux)              
        
        })
    }, [])

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
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index)=> {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                        {columns.map((column , indexC) => {
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

