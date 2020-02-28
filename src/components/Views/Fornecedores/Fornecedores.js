import React from 'react'
import Typography from '@material-ui/core/Typography';
import ListagemClientes from './ListagemFornecedores';
import Cadastro from './Cadastro';
import DetalhesFrigo from './DetalhesFrigo'
import { Switch, Route , useRouteMatch } from "react-router-dom"

export default function Clientes(){
    let { path } = useRouteMatch()

    const [title, setTitle] = React.useState("CLIENTES")

    return(
        <div style={{padding : '50px'}}>
            
            <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
            <br />
            <div>
                <Switch>
                    <Route exact path={path}>
                        <ListagemClientes set={setTitle}/>
                    </Route>         
                    <Route path={`${path}/cadastro`}>
                        <Cadastro set={setTitle}/>
                    </Route>
                    <Route path={`${path}/detalhes`}>
                        <DetalhesFrigo />
                    </Route>               
                </Switch>                               
            </div> 
        </div>
    )
}