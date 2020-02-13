import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ListagemClientes from './ListagemClientes'

export default function Clientes(){
    return(
        <div style={{padding : '50px'}}>
            <Typography gutterBottom variant="h5" component="h2">CLIENTES</Typography>
            <br />
            <div>
                <div style={{ marginBottom: '20px' }}>
                    <Button variant="contained" color="primary" >
                        Cadastrar
                    </Button>
                </div>               
                <div>
                    <ListagemClientes />
                </div>
            </div> 
        </div>
    )
}