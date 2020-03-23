import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { update, getS , add} from '../../../util/firebase/RequestFire'
import Confirmado from './Confirmado'


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        // width: '1093px',
        // height: '662px',
        borderRadius: '50px',
        padding: '50px',
        fontFamily : 'Roboto'
    },
    divModal: {
        marginRight : '2.5px',
        marginLeft : '2.5px',
        flex : 1
    },
    font: {
        letterSpacing: '.7px',
        color: '#707070'
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
    const [conf, setConf] = React.useState(false)

    const confirma = () => {
        setConf(true)
    }

    return (
        <div className={classes.root}>
            {conf === false ? <div>
            <p style={{ fontSize: '30px', fontWeight: '500' , color : '#c64031'}}>Detalhes do Pedidos</p>            
            <div style={{ display : 'flex' , width : '100%'}}>
                <div className={classes.divModal} style={{ marginRight: '10px'}}>
                    <p className={classes.font} style={{ fontSize: '20px', fontWeight: '700'}}>
                        # Numero do Pedido : 
                    <p style={{ fontSize: '18px' , marginTop : '5px', fontWeight: '400'}}>Valor</p>
                    </p>
                    <p className={classes.font} style={{ fontSize: '20px', fontWeight: '700' }}>
                        # Numero do Pedido :
                    <p style={{ fontSize: '18px' , marginTop : '5px', fontWeight: '400'}}>Valor</p>
                    </p>
                </div>
                <div className={classes.divModal} style={{ marginLeft: '10px' }}>
                    <p className={classes.font} style={{ fontSize: '20px', fontWeight: '700' }}>
                        # Numero do Pedido :
                    <p style={{ fontSize: '18px' , marginTop : '5px', fontWeight: '400'}}>Valor</p>
                    </p>
                    <p className={classes.font} style={{ fontSize: '20px', fontWeight: '700' }}>
                        # Numero do Pedido :
                    <p style={{ fontSize: '18px' , marginTop : '5px', fontWeight: '400'}}>Valor</p>
                    </p>
                </div>
            </div>
            <hr style={{ size : '2px' , color : 'black'}}/>
            <br />
            <div style={{ padding: '1px' , width : '100%' }}>
                <div style={{display: 'flex' , flexDirection : 'column' , justifyContent : 'initial'}}>
                    <p className={classes.font} style={{ fontSize: '20px', fontWeight: '700' , marginBottom : '3px'}}>
                        End. de Cobrança :
                    <p style={{ fontSize: '18px', marginTop: '5px', fontWeight: '400' }}>Valor</p>
                    </p>
                    <p className={classes.font} style={{ fontSize: '20px', fontWeight: '700' , marginTop : '3px'}}>
                        Prazo :
                    <p style={{ fontSize: '18px', marginTop: '5px', fontWeight: '400' }}>Valor</p>
                    </p>
                </div>                
                <br />
                <div style={{display : 'flex' }}>
                    <div style={{ display : 'flex' , flex : 1, justifyContent : 'initial'}}>
                        <p className={classes.font} style={{ fontSize: '25px', fontWeight: '700', marginTop: '3px' }}>Prazo:</p>
                    </div>
                    <div style={{ display : 'flex' , flex : 1, justifyContent : 'flex-end', width : '100%' , marginRight : '5%'}}>
                        <p className={classes.font} style={{ fontSize: '25px', marginTop: '5px', fontWeight: '500' }}>Valor</p>
                    </div>
                </div>
            </div>
            <br />
            <button type="button" className={classes.button} onClick={() => confirma()}> 
                CONFIRMAR PEDIDO
            </button></div> : <Confirmado fun={close}/> }
        </div>
    );
}