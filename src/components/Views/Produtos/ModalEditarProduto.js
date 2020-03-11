import React from 'react'
import bovino from '../../../images/img_bovina.png'
import aves from '../../../images/img_aves.png'
import suino from '../../../images/img_suina.png'
import peixes from '../../../images/img_peixe.png'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Editar from './Editar'
import Fab from '@material-ui/core/Fab'
import EditIcon from '@material-ui/icons/Edit';

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

export default function TransitionsModal({ fun, id }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [tipo, setTipo] = React.useState('')


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // React.useEffect(() => {
    //     if (id !== null) {
    //         DetalheFire("clientes", id)
    //             .then(d => {
    //                 let view = d.data()
    //                 setData({ nome: view.nome, cnpj: view.cnpj, email: view.email, telefone: view.telefone })
    //                 console.log(data)
    //             })
    //     }
    // }, [])

    return (
        <div>
            <Fab
                size="small"
                color="primary"
                aria-label="edit"
                style={{ backgroundImage: 'linear-gradient(90deg, #2fcf24 0%, #10640a 100%)' }}
                onClick={() => handleOpen()}
            ><EditIcon /></Fab>
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
                    <Editar fun={fun} id={id} close={handleClose}/>
                </Fade>
            </Modal>
        </div>
    );
}

