import React from 'react'
import Typography from '@material-ui/core/Typography';
import ListagemAcougues from './ListagemAcougues';
import Cadastro from './Cadastro';
import { Switch, Route, useRouteMatch } from "react-router-dom"

export default function Clientes() {
    let { path } = useRouteMatch()

    const [title, setTitle] = React.useState("CLIENTES")

    return (
        <div style={{ padding: '50px' }}>

            <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
            <br />
            <div>
                <Switch>
                    <Route exact path={path}>
                        <ListagemAcougues set={setTitle} />
                    </Route>
                    <Route path={`${path}/cadastro`}>
                        <Cadastro set={setTitle} />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}