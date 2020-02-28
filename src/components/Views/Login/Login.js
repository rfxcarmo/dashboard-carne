import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import fundo from '../../../images/fundo.png'
import FormLogin from './LoginForm'
import TextLogin from './LoginText'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        height: '100vh',
        backgroundImage : `url(${fundo})`,
        backgroundSize : 'cover'
    }, 
    divText : {
        flex : 1
    }
}));

export default function Login(){
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TextLogin />
            <div style={{ flex: 1 }}>
            <FormLogin />
            </div>
        </div>
    )
}