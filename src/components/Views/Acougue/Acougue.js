import React from 'react'
import ListagemAcougues from './ListagemAcougues';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import Modal from './ModalCadastroAcou'

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

export default function Clientes() {
    const classes = useStyles();
    const [busca, setBusca] = React.useState('')
    const [ att , setAtt ] = React.useState(false)

    // React.useEffect(() => {
    //     setAtt('Arroz')
    // }, [])

    // React.useEffect(() => {
    //     console.log(att)
    // }, [att])

    return (
        <div style={{ padding: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                <Modal set={setAtt}/>
                <div className={classes.divInputBusca}>
                    <input type="text" placeholder="Buscar produto..."
                        className={classes.inputBusca}
                        onInput={e => {
                            setBusca(e.target.value)
                        }
                        }
                    ></input>
                    <SearchIcon style={{ fontWeight: 300, fontSize: '42px' }} />

                </div>
            </div>
            <br />
            <div>
                <ListagemAcougues busca={busca} att={att}/>
            </div>
            
        </div>
    )
}