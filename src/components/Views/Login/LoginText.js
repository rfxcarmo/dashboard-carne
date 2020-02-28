import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flex: 1
    }, 
    ola : {
        fontSize: '170px',
        //fontWeight: 300,
        color : '#c64031',
        margin : '10px' 
    },
    text : {
        fontSize: '52px',
        //fontWeight: 300,
        color: '#c64031',
        margin : '10px'
    }
}));

export default function TextLogin() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div style={{ transform : 'translate(0 , -50%)', position : 'relative' , top : '50%', alignItems : 'center'}}>
                <div style={{ textAlign: 'initial', width : '70%', marginLeft : '20%', marginRight : '10%'}}>
                <p className={classes.ola}>Olá,</p>
                <p className={classes.text}>Bem vindo ao iFrigo! <br />
                    Digite seu usuário <br />
                    e senha para acessara <br />
                    plataforma.</p>
                </div>
            </div>
        </div>
    )
}