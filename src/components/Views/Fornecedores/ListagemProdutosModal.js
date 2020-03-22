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
import Switch from '@material-ui/core/Switch';
import { get, del } from '../../../util/firebase/RequestFire'
import { GetFire, DeleteFire } from '../../../util/firebase/RequestFire'


const columns = [
    { id: 'swt', label: 'Seleção', minWidth: 170 },
    { id: 'nome', label: 'Nome', minWidth: 100 },
    { id: 'tipo', label: 'Tipo', minWidth: 100 },
    { id: 'preco', label: 'Preço por kg', minWidth: 100 }
];

function createData(selecao, nome, tipo, preco, index, data) {
    let swt = <Switch checked={selecao} onClick={e => { e.target.checked === true ? e.target.checked = false : e.target.checked = true }}/>

    return { swt , nome , tipo, preco };
}

// function createData(name, VKG, tipo, funDel, id, att) {
//     let editar = <ModalEditar fun={att} id={id} />
//     let deletar = <Fab size="small" color="secondary" aria-label="edit" onClick={() => funDel(id)}
//         style={{ backgroundImage: 'linear-gradient(90deg, #c21616 0%, #630c0c 100%)' }}><DeleteForeverIcon /></Fab>

//     return { name, VKG, tipo, editar, deletar }
// }

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export default function StickyHeadTable( { data } ) {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [rows, setRows] = React.useState([])
    const [chk, setChk] = React.useState({})


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
            data.produtos = Object.values(s.produtos)
            data.produtos.map((map, index) =>{
                setChk({...chk , [index] : map.dis})
                arrayAux.push(createData(chk[index], map.nome, map.valor, map.tipo, index, data))
                }// Object.keys(s.produtos)[index], atualiza
            )
            setChk(arrayAux)
            console.log(chk)
            setRows(arrayAux)
        })
    }

    // const funBusca = (busca) => {
    //     get().then(s => {
    //         buscador(busca, Object.values(s.produtos)).then(b => {
    //             let arrayAux = []
    //             b.map((map, index) =>
    //                 arrayAux.push(createData(map.nome, `R$ ${parseFloat(map.valor)}`, map.tipo, dele, Object.keys(s.produtos)[index], atualiza))
    //             )
    //             setRows(arrayAux)
    //         })

    //     })
    // }

    // const dele = (id) => {
    //     del(id).then(s => atualiza())
    // }
    // React.useEffect(() => {
    //     if (busca !== '') {
    //         funBusca(busca)
    //     } else {
    //         atualiza()
    //     }
    // }, [busca])

    React.useEffect(() => {
        atualiza()
    }, [])

    return (
        <div style={{ marginBottom: '30px' }}>
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
                                    <TableRow hover role="checkbox" tabIndex={-1} key={index} style={{ height: '50px' }} >
                                        {columns.map((column, indexC) => {
                                            const value = row[column.id];
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

