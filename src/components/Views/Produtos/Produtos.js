import React from 'react'
import Typography from '@material-ui/core/Typography';
import ListagemProdutos from './ListagemProdutos';
import Cadastro from './Cadastro';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Switch, Route, useRouteMatch , Link, useLocation} from "react-router-dom"

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

export default function Clientes() {
    let { path } = useRouteMatch()

    const [title, setTitle] = React.useState("PRODUTOS")

    let query = useQuery()

    return (
        <div style={{ padding: '50px' }}>
            <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
            <br />
            <div style={{ display : 'flex'}}>
                <Fab color="primary" size="medium" aria-label="add" component={Link} to={`${path}?tipo=bovino`}>
                    <AddIcon />
                </Fab>
                <Fab color="primary" size="medium" aria-label="add" component={Link} to={`${path}?tipo=suino`}>
                    <AddIcon />
                </Fab>
                <Fab color="primary" size="medium" aria-label="add" component={Link} to={`${path}?tipo=aviario`}>
                    <AddIcon />
                </Fab>
                <Fab color="primary" size="medium" aria-label="add" component={Link} to={`${path}?tipo=peixe`}>
                    <AddIcon />
                </Fab>
            </div>
            <br />
            <div>
                <Switch>
                    <Route exact path={path}>
                        <ListagemProdutos tipo={query.get('tipo')} set={setTitle}/>                        
                    </Route>
                    <Route path={`${path}/cadastro`}>
                        <Cadastro set={setTitle}/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}