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
import ModalEditar from './ModalEditarAcou'

const columns = [
    { id: 'name', label: 'Nome', minWidth: 170 },
    { id: 'contato', label: 'Contato', minWidth: 100 },
    { id: 'email', label: 'Email', minWidth: 100 },
    { id: 'telefone', label: 'Telefone', minWidth: 100 },
    { id: 'status', label: 'Status', maxWidth: 80 },
    { id: 'editar', label: 'Editar', maxWidth: 80 },
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
    const [ data , setData ] = React.useState({})
    const [cor, setCor] = React.useState([ '#04ff4f', '#04ff4f', '#04ff4f' ])

    function createData(name, contato, email, telefone, statusC, funDel, id, att, muda) {

        let status = <Fab size="small" color="secondary" aria-label="edit" style={{ backgroundColor: cor }} onClick={() => muda()}
        ></Fab>
        let editar = <ModalEditar fun={att} id={id} />

        let deletar = <Fab size="small" color="secondary" aria-label="edit" onClick={() => funDel(id)}
            style={{ backgroundImage: 'linear-gradient(90deg, #c21616 0%, #630c0c 100%)' }}><DeleteForeverIcon /></Fab>

        return { name, contato, email, telefone, status, editar, deletar };
    }
    

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const mudaCor = (p) => {
        let aux = cor
        switch(cor[p]){
            case '#04ff4f':
                setCor('#ffdf0f')                
                aux[p] = '#ffdf0f'
            break
            case '#ffdf0f':
                aux[p] = '#ff665c'
            break
            case '#ff665c':
                aux[p] = '#04ff4f'
            break
        }
        setCor(aux)
    }

    React.useEffect( () => {
        console.log(cor)
    }, [cor])

    const atualiza = () => {
        get().then(s => {
            let arrayAux = []            
            Object.values(s.clientes).map((map, index) =>
                arrayAux.push(createData(map.nome, map.nomeContato, map.telefone, map.email, cor , dele, Object.keys(s.clientes)[index], atualiza, mudaCor))
            )
            setRows(arrayAux)
        })
    }

    const dele = (id) => {
        del('/clientes/' , id).then(s => atualiza())
    }
    
    React.useEffect(() => {
        atualiza()
    }, [])

    React.useEffect(() => {
        console.log(data)
    }, [data])

    React.useEffect(() => {
        if(att === true){
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
            <div style={{ height: '50px', weight: '50px', backgroundColor: cor[1] }}
                onClick={() => mudaCor(1)}></div>
                <br />
            <div style={{ height: '50px', weight: '50px', backgroundColor: cor[2] }}
                onClick={() => mudaCor(2)}></div>
            <br />
            <div style={{ height: '50px', weight: '50px', backgroundColor: cor[0] }}
                onClick={() => mudaCor(0)}></div>
            <br />
        </div>
    );
}

