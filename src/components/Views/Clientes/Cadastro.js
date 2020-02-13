import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
            width: 500,            
        },
    },
    divU : {
        display: 'flex',
        '& > *': {
            marginLeft: theme.spacing(0.5),
            marginRight: theme.spacing(0.5),
            width: 250,
        }
    }
}));

export default function BasicTextFields() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Nome" variant="outlined" size="small"/>
            <TextField id="outlined-basic" label="Razão Social" variant="outlined" size="small" />
            <TextField id="outlined-basic" label="Email" variant="outlined" size="small" />
            <div className={classes.divU}>
                <TextField id="outlined-basic" label="Telefone" variant="outlined" size="small" />
                <TextField id="outlined-basic" label="Celular" variant="outlined" size="small" />
            </div>
            <Button variant="contained" color="primary">
                Cadastrar
            </Button>
        </form>
    );
}