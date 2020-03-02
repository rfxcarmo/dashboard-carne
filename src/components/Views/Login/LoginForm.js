import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import firebase from '../../../firebase';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: 'linear-gradient(180deg, #c31717 0%, #7f0000 100%)',
        borderRadius: '50px',
        boxShadow: '-2px 9px 29px rgba(0, 0, 0, .31)',
        width: '50%',
        height: '80%',
        overflow: 'hidden',
        transform: 'translate(50%, 10%)',
        color: 'white',
    },
    logo: {
        marginTop: '10%',
        marginBottom: '10%',
        position: 'relative',
        transform: 'translate(-50%)',
        left: '50%',
    },
    formInput: {
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        border: 'none',
        width: '90%',
        height: '30px'
    },
    formButton: {
        backgroundImage: 'linear-gradient(90deg, #9df676 0%, #2cf17b 100%)',
        borderRadius: '24px',
        border: 'none',
        width: '90%',
        height: '50px',
        fontSize: '15px',
        fontWeight: 150,
        letterSpacing: '2.808px',
        color: '#c31717'
    }
}));


export default function FormLogin({set}) {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        await firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
            if (user.user) {
                alert('ok')
                set(true)
            }
        }).catch((error) => {
                if (error.code == 'auth/wrong-password') {
                    alert('Senha incorreta');

                } if (error.code == 'auth/invalid-email') {
                    alert('Seu e-mail não é valido.');

                } if (email == '' || password == '') {
                    alert('Preencha os campos vazios');
                }
            })
    }



    return (
        <div className={classes.root}>
            <img src={require('../../../images/logo_branca.png')} height="115" width="167" className={classes.logo} alt="iFrigo" />
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                <label>Usuario</label><br />

                <input type="text" className={classes.formInput}
                    value={email}
                    onChange={event => setEmail(event.target.value)}></input><br />

                <label>Senha</label><br />

                <input type="text" className={classes.formInput}
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                ></input><br /><br />

                <button type="submit" className={classes.formButton}>ENTRAR</button><br />
                <p>Esqueci minha senha</p>

            </form>
            <div style={{ position: 'absolute', bottom: '15px', width: '100%', textAlign: 'center' }}>
                Desenvolvido por Azimute Startup
                </div>
        </div>
    )
}