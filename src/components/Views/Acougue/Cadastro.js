import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


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
    label : {
        fontSize: '15px',
        fontWeight: 300,
        letterSpacing: '1px',
        color: '#a40000',
        margin : '10px'
    },
    input : {
        borderRadius: '4.25px',
        border: '1px solid #e3e3e3',
        overflow: 'hidden',
        margin: '10px',
        height : '25px'
    }, 
    button : {
        backgroundImage: 'linear-gradient(90deg, #64d260 0%, #3eb365 100%)',
        borderRadius: '5px',
        border : 'none',
        width: '519px',
        height: '45px',
        overflow: 'hidden',
        cursor : 'pointer',
        fontSize: '18px',
        letterSpacing: '10.8px',
        color: '#ffffff'

    }
}));

export default function BasicTextFields({ id }) {
    const classes = useStyles();


    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div style={{ display: 'flex' , marginBottom : '30px'}}>
                <div>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <label className={classes.label}>Codigo</label><br />
                            <input type='text' className={classes.input} style={{ width: '205px' }}/>
                        </div>
                        <div>
                            <label className={classes.label} >Tipo de Pessoa</label><br />
                            <input type='text' className={classes.input} style={{ width: '205px' }}/>
                        </div>
                    </div >

                <div >
                    <div style={{ display: 'block' }}>
                        <label className={classes.label} >Nome</label><br />
                        <input name="codigo" type='text' className={classes.input} style={{ width: '430px' }}/>
                    </div>
                    <div style={{ display: 'block' }}>
                        <label className={classes.label} >Endereço</label><br />
                        <input name="codigo" type='text' className={classes.input} style={{ width: '430px' }}/>
                    </div>
                    <div style={{ display: 'block' }}>
                        <label className={classes.label} >Email</label><br />
                        <input name="codigo" type='text' className={classes.input} style={{ width: '430px' }}/>
                    </div>
                </div>

                <div style={{ display: 'flex' }}>
                    <div>
                        <label className={classes.label} >Cidade</label><br />
                        <input name="codigo" type='text' className={classes.input} style={{ width: '205px' }}/>
                    </div>
                    <div>
                        <label className={classes.label} >Estado</label><br />
                        <input name="codigo" type='text' className={classes.input} style={{ width: '205px' }}/>
                    </div>
                </div>
                </div>

                <div >
                    <div>
                        <label className={classes.label} >CNPJ</label><br />
                        <input name="codigo" type='text' className={classes.input} style={{ width: '430px'}}/>
                    </div>
                    <div>
                        <label className={classes.label} >RG</label><br />
                        <input name="codigo" type='text' className={classes.input} style={{ width: '430px' }} />
                    </div>
                    <div>
                        <label className={classes.label} >CEP</label><br />
                        <input name="codigo" type='text' className={classes.input} style={{ width: '430px' }}/>
                    </div>
                    <div>
                        <label className={classes.label} >Bairro</label><br />
                        <input name="codigo" type='text' className={classes.input} style={{ width: '430px' }}/>
                    </div>
                    <div>
                        <label className={classes.label} >Telefone</label><br />
                        <input name="codigo" type='text' className={classes.input} style={{ width: '430px' }} />
                    </div>
                </div>
            </div>
            <button type="button" className={classes.button}>
                CADASTRAR CLIENTE
                </button>
        </form>
    );
}