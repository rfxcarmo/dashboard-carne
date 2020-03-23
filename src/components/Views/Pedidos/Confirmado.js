import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
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
    },
    tittle : {
        fontSize: '32px',
        fontWeight: '500',
        color: '#3eb365'
    }, 
    text :  {
        fontSize: '28px',
        color: '#3eb365'
    }
}));

export default function Confirmado({ fun }) {
    const classes = useStyles();

    return(
        <div style={{display : 'flex', flexDirection : 'column', alignItems : 'center' }}>
            <p className={classes.tittle}>Pedido Confirmado</p>

            <p className={classes.text}>Um email sera enviado ao cliente 
            <br/> com os detalhes do pedido.</p>

            <button type="button" className={classes.button} onClick={() => fun()}>
                FECHAR
            </button>
        </div>
    )
}