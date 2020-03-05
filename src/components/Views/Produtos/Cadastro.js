import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import bovino from '../../../images/img_bovina_cadastro.png'
import aves from '../../../images/img_aves_cadastro.png'
import suino from '../../../images/img_suina_cadastro.png'
import peixes from '../../../images/img_peixe_cadastro.png'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '800px',
        height: '400px',
        borderRadius: '50px',
        overflow : 'hidden'
    },
    label: {
        fontSize: '15px',
        fontWeight: 300,
        letterSpacing: '1px',
        color: '#a40000',
        margin: '10px',
        fontFamily : 'Roboto'
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
        width: '430px',
        height: '45px',
        overflow: 'hidden',
        cursor: 'pointer',
        fontSize: '18px',
        letterSpacing: '10.8px',
        color: '#ffffff'

    }
}));

export default function BasicTextFields({ id , tipo}) {
    const classes = useStyles();
    const [title, setTitle] = React.useState('')
    const [ bg, setBg ] = React.useState('')

    React.useEffect( () => {
        switch (tipo) {
            case 'bovino':
                setTitle(<h>BO/ <br /> /VI <br /> NA/</h>)
                setBg(bovino)
                break;
            case 'aves':
                setTitle(<h>AV/ <br /> /ES</h>)
                setBg(aves)
                break;
            case 'suino':
                setTitle(<h>SU/ <br /> /IN <br /> OS/</h>)
                setBg(suino)
                break;
            case 'peixes':
                setTitle(<h>PE/ <br /> /I/ <br /> XE/</h>)
                setBg(peixes)
                break;        
            default:
                break;
        }
    }, [])

    return (
        <form className={classes.root} noValidate autoComplete="off">
                
                <div style={{ 
                    backgroundImage: `url(${bg})`, 
                    backgroundSize: 'cover', 
                    width: '35%' , 
                    height : '100%' , 
                    position : "relative", 
                    left : '-8px',
                    display : 'flex',
                    alignItems : 'center',
                    justifyContent : 'center'}}>             
                <div style={{ fontSize: '95px', fontFamily: 'Roboto', color: 'white', display: 'flex', justifyContent: 'center' }}>{title}</div> 
                </div>

                <div style={{ padding: '5%', width: '70%' }} >
                    <div style={{display : 'flex '}}>
                    <div style={{ width: '49.5%' }}>
                        <label className={classes.label} >Tipo da Carne</label><br />
                        <input name="codigo" type='text' className={classes.input}  />
                    </div>
                    {tipo === 'bovino' ? <div style={{ width: '49.5%' }}>
                        <label className={classes.label} >Tipo de corte</label><br />
                        <input name="codigo" type='text' className={classes.input} />
                    </div> : <div></div> }
                    
                    </div>
                    <div style={{ width: '100%' }}>
                        <label className={classes.label} >Nome da Carne </label><br />
                    <input name="codigo" type='text' className={classes.input} style={{ width: '98%' , backgroundColor : 'red'}}/>
                    </div>
                    <div style={{ width: '100%' }}>
                        <label className={classes.label} >Valor por KG</label><br />
                    <input name="codigo" type='text' className={classes.input} style={{ width: '98%', backgroundColor: 'red'}} />
                    </div>
                    <br />
                    <button type="button" className={classes.button}>
                        CADASTRAR CARNE
                    </button>
                </div>                           
        </form>
    );
}