import React from 'react'
import ListagemClientes from './ListagemFornecedores';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Modal from './ModalCadastroFrigo'
import DetalhesFrigo from './DetalhesFrigo'
import { Switch, Route , useRouteMatch } from "react-router-dom"

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    divInputBusca: {
        backgroundImage: "linear-gradient(90deg, #c21616 0%, #630c0c 100%)",
        display: 'flex',
        width: "80%",
        height: "42px",
        borderRadius: '20px',
        paddingLeft: '19px',
        fontSize: "20px",
        fontWeight: 300,
        color: "#fff"
    },
    inputBusca: {
        backgroundImage: "linear-gradient(90deg, #c21616 0%, #630c0c 100%)",
        width: "95%",
        height: "40px",
        border: "none",
        fontSize: "20px",
        fontWeight: 300,
        color: "#fff",
        '&::placeholder': {
            color: '#fff'
        }
    },
});

export default function Clientes(){
    let { path } = useRouteMatch()
    const classes = useStyles();

    return (
        <div style={{ padding: '50px' }}>
                           
                <Switch>
                    <Route exact path={path}>
                        <div>
                        <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                            <Modal fun={1} />
                            <div className={classes.divInputBusca}>
                                <input type="text" placeholder="Buscar fornecedor..." className={classes.inputBusca}></input>
                                <SearchIcon style={{ fontWeight: 300, fontSize: '42px' }} />
                            </div>
                        </div>
                        <br />
                        <br />
                        <ListagemClientes />
                        </div>                        
                    </Route>
                    <Route path={`${path}/detalhes`}>
                        <DetalhesFrigo />
                    </Route>
                </Switch>
            </div>
    )
}