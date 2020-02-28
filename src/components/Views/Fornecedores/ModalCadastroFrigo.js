import React from 'react'
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import { DetalheFire } from '../../../util/firebase/RequestFire'
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

export default function TransitionsModal({ fun , id }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [data , setData ] = React.useState('')

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    React.useEffect(() => {
        if( id !== null){
        DetalheFire("clientes", id)
            .then(d => {
                let view = d.data()
                setData({ nome: view.nome, cnpj: view.cnpj, email: view.email, telefone: view.telefone})
                console.log(data)
            })}
    }, [])

    return (
        <div>
            {fun === 1 ? <Fab size="small" color="primary" aria-label="edit" onClick={handleOpen}
                style={{ backgroundColor: 'rgb(254, 231, 25)' }}><EditIcon /></Fab> :
                    <Button variant="contained" color="primary" onClick={handleOpen}>Cadastrar</Button>}
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
                    <Cadastro id={id}/>
                </Fade>
            </Modal>
        </div>
    );
}

