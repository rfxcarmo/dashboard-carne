import React from 'react'
import bovino from '../../../images/img_bovina.png'
import aves from '../../../images/img_aves.png'
import suino from '../../../images/img_suina.png'
import peixes from '../../../images/img_peixe.png'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Cadastro from './Cadastro'

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    divPro: {
        backgroundColor: '#f2f2f2',
        borderRadius: '25px',
        boxShadow: '0 7px 10px rgba(0, 0, 0, .34)',
        width: '25%',
        height: '125px',
        overflow: 'hidden',
        margin: '20px',
        display: 'flex',
        textAlign: 'center',
        fontSize: '46px',
        fontWeight: 300,
        letterSpacing: '4.6px',
        color: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        fontFamily: 'roboto'
    }
}));

export default function TransitionsModal({ fun }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [tipo, setTipo] = React.useState('')


    const handleOpen = ( cTipo ) => {
        setTipo(cTipo)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div style={{ marginBottom: '10px' }}>
                <h3 style={{ fontSize: '20px', letterSpacing: '.28px', color: '#707070' }}>Clique para cadastrar : </h3>
            </div>
            <div style={{ width: '100%' }}>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                    <div className={classes.divPro} onClick={() => handleOpen('Bovina')} style={{ backgroundImage: `url(${bovino})`, backgroundSize: 'cover' }}>BOVINO</div>
                    <div className={classes.divPro} onClick={() => handleOpen('Aves')} style={{ backgroundImage: `url(${aves})`, backgroundSize: 'cover' }} >AVES</div>
                    <div className={classes.divPro} onClick={() => handleOpen('Suina')} style={{ backgroundImage: `url(${suino})`, backgroundSize: 'cover' }} >SUINO</div>
                    <div className={classes.divPro} onClick={() => handleOpen('Peixes')} style={{ backgroundImage: `url(${peixes})`, backgroundSize: 'cover' }} >PEIXE</div>
                </div>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Cadastro fun={fun} tipo={tipo} close={handleClose}/>
                </Fade>
            </Modal>
        </div>
    );
}

