import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { update, getS , add} from '../../../util/firebase/RequestFire'


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        // width: '1093px',
        // height: '662px',
        borderRadius: '50px',
        padding: '50px'
    },
    divModal: {
        margin : '5px',
        marginRight : '2.5px',
        marginLeft : '2.5px'

    },
    input: {
        borderRadius: '4.25px',
        border: '1px solid #e3e3e3',
        overflow: 'hidden',
        margin: '10px',
        height: '25px'
    },
    button: {
        backgroundImage: 'linear-gradient(90deg, #64d260 0%, #3eb365 100%)',
        borderRadius: '5px',
        border: 'none',
        width: '519px',
        height: '45px',
        overflow: 'hidden',
        cursor: 'pointer',
        fontSize: '18px',
        letterSpacing: '10.8px',
        color: '#ffffff'

    }
}));

export default function BasicTextFields({ fun, id, close }) {
    const classes = useStyles();
    const [model, setModel] = React.useState({})

    React.useEffect(() => {
        console.log(id)
        getS('clientes', id)
            .then(s => {
                setModel(s)
                console.log(s)
            })
    }, [])

    const updateFire = (data) => {
        update(id, data, '/clientes/').then(s => {
            alert('Editado com sucesso')
            fun()
            close()
        })
    }

    return (
        <div className={classes.root}>
            <h1>Detalhes do Pedidos</h1>
            <div style={{ display : 'flex'}}>
                <div className={classes.divModal} style={{ marginRight: '10px'}}>
                    <h2># Numero do Pedido : <br /> Valor</h2>
                    <h2># Numero do Pedido : <br /> Valor</h2>
                </div>
                <div className={classes.divModal} style={{ marginLeft: '10px' }}>
                    <h2># Numero do Pedido : <br /> Valor</h2>
                    <h2># Numero do Pedido : <br /> Valor</h2>
                </div>
            </div>
            <br />
            <div style={{ padding: '1px' , }}>
                <div style={{display: 'flex' , flexDirection : 'column' , textAlign : 'initial'}}>
                    <h2>End. Entrega: <br /> Valor</h2>
                    <br />
                    <h2>Prazo: <br /> Valor</h2>
                </div>                
                <br />
                <div>
                    <h2>Prazo:  Valor</h2>
                </div>
            </div>
            <br />
            <button type="button" className={classes.button}>
                CONFIRMAR PEDIDO
            </button>
        </div>
    );
}