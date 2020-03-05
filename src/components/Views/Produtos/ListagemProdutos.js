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
import Fab from '@material-ui/core/Fab'
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { FiltroProdutoTipoFire , GetFire } from '../../../util/firebase/RequestFire'
import bovino from '../../../images/img_bovina.png'
import aves from '../../../images/img_aves.png'
import suino from '../../../images/img_suina.png'
import peixes from '../../../images/img_peixe.png'
import { css } from 'styled-components';
import Modal from './ModalCadastroProduto'

const columns = [
    { id: 'name', label: 'Nome', minWidth: 170 },
    { id: 'VKG', label: 'Valor por KG', minWidth: 100 },
    { id: 'tipo', label: 'Tipo', minWidth: 100 },
    { id: 'editar', label: '', maxWidth: 100 },
    { id: 'deletar', label: '', maxWidth: 100 },
];

const RobotoFont = css`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
`;

function createData(name, VKG, tipo, editar, deletar) {
    editar = <Fab
        size="small"
        color="primary"
        aria-label="edit"
        style={{ backgroundImage: 'linear-gradient(90deg, #2fcf24 0%, #10640a 100%)'}}
    ><EditIcon /></Fab>
    deletar = <Fab size="small" color="secondary" aria-label="edit" style={{ backgroundImage: 'linear-gradient(90deg, #c21616 0%, #630c0c 100%)' }}><DeleteForeverIcon /></Fab>
    
    return { name, VKG, tipo , editar, deletar} //, population, size, density };
}

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
    divPro : {
        backgroundColor: '#f2f2f2',
        borderRadius: '25px',
        boxShadow: '0 7px 10px rgba(0, 0, 0, .34)',
        width: '25%',
        height: '125px',
        overflow: 'hidden',
        margin : '20px',
        display: 'flex',
        textAlign: 'center',
        fontSize: '46px',
        fontWeight: 300,
        letterSpacing: '4.6px',
        color: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
        cursor : 'pointer',
        fontFamily: 'roboto'
    }
});

export default function StickyHeadTable() {
    
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
            <Modal />
            <br />            
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

