import React from 'react'
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
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
}));

export default function TransitionsModal({ fun, id }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);


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
            {fun === 1 ?
                <Fab color="primary" aria-label="add" size="small" onClick={handleOpen} style={{ marginRight: '10px', backgroundImage: 'linear-gradient(90deg, #2fcf24 0%, #10640a 100%)' }}>
                    <AddIcon style={{ width: '20px', height: '20px' }} />
                </Fab> :
                <Fab
                    size="small"
                    color="primary"
                    aria-label="edit"
                    style={{ backgroundImage: 'linear-gradient(90deg, #2fcf24 0%, #10640a 100%)' }}
                ><EditIcon style={{ width: '20px', height: '20px' }} /></Fab> }
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
                    <Cadastro id={id} />
                </Fade>
            </Modal>
        </div>
    );
}

