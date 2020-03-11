import React from 'react'
import ListagemProdutos from './ListagemProdutos';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    divInputBusca : {
        backgroundImage: "linear-gradient(90deg, #c21616 0%, #630c0c 100%)",
        display : 'flex',
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

export default function Clientes() {
    const classes = useStyles();
    const [ busca , setBusca] = React.useState('')

    return (
        <div style={{ padding: '50px' , display : 'flex' , flexDirection : 'column' , justifyContent : 'center'}}>
            <div style={{display: 'flex', width:'100%', justifyContent : 'center'}}>
                <div className={classes.divInputBusca}>
                    <input type="text" placeholder="Buscar produto..." 
                    className={classes.inputBusca}
                    onInput={e => {
                        setBusca(e.target.value)
                    }
                    }
                    ></input>
                    <SearchIcon style ={{fontWeight : 300 , fontSize : '42px'}}/>
                </div>
            </div>
            <br />
            <div>
                <ListagemProdutos busca={busca}/>                        
            </div>
        </div>
    )
}