import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import bovino from '../../../images/img_bovina_cadastro.png'
import aves from '../../../images/img_aves_cadastro.png'
import suino from '../../../images/img_suina_cadastro.png'
import peixes from '../../../images/img_peixe_cadastro.png'
import { update, getS } from '../../../util/firebase/RequestFire'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '800px',
        height: '400px',
        borderRadius: '65px',
        overflow: 'hidden'
    },
    label: {
        fontSize: '15px',
        fontWeight: 300,
        letterSpacing: '1px',
        color: '#a40000',
        margin: '10px',
        fontFamily: 'Roboto'
    },
    input: {
        borderRadius: '4.25px',
        border: '1px solid #e3e3e3',
        overflow: 'hidden',
        margin: '10px',
        height: '25px',
        paddingLeft: "10px"
    },
    button: {
        backgroundImage: 'linear-gradient(90deg, #64d260 0%, #3eb365 100%)',
        borderRadius: '5px',
        border: 'none',
        width: '415px',
        height: '45px',
        overflow: 'hidden',
        cursor: 'pointer',
        fontSize: '18px',
        letterSpacing: '10.8px',
        color: '#ffffff',
        marginLeft: "12px"
    }
}));

export default function BasicTextFields({ fun, id , close}) {
    const col = 'produtos'
    const classes = useStyles();
    const [title, setTitle] = React.useState('')
    const [bg, setBg] = React.useState('')
    const [data, setData] = React.useState({
        "tipo": 'Bovina',
        "tipoCorte": '',
        "nome": '',
        "valor": ''
    })

    React.useEffect(() => {
        getS( 'produtos' , id )
        .then(s => {
            setData(s)
            switch (s.tipo) {
                case 'Bovina':
                    setTitle(<h>BO/ <br /> /VI <br /> NA/</h>)
                    setBg(bovino)
                    break;
                case 'Aves':
                    setTitle(<h>AV/ <br /> /ES</h>)
                    setBg(aves)
                    break;
                case 'Suino':
                    setTitle(<h>SU/ <br /> /IN <br /> OS/</h>)
                    setBg(suino)
                    break;
                case 'Peixes':
                    setTitle(<h>PE/ <br /> /I/ <br /> XE/</h>)
                    setBg(peixes)
                    break;
                default:
                    break;
            }
        })        
    }, [])

    const updateFire = (data) => {
        update(id, data, '/produtos/').then(s => {
            alert('Editado com sucesso')
            fun()
            close()
        })
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">

            <div style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                width: '35%',
                height: '100%',
                position: "relative"
            }}>

                <div style={{
                    backgroundColor: 'rgba(0,0,0, 0.3)',
                    width: "100%",
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                    <div style={{
                        fontSize: '95px',
                        fontFamily: 'Roboto',
                        color: 'white',
                        display: 'flex',
                        justifyContent: 'center',
                        letterSpacing: '15px'
                    }}>{title}</div>
                </div>
            </div>

            <div style={{ padding: '5%', width: '70%', borderRight: 'rgba( 0, 0, 0, 0.4)' }} >
                <div style={{ display: 'flex ' }}>
                    <div style={{ width: '49.5%' }}>
                        <label className={classes.label} >Tipo da Carne</label><br />
                        <select id="tipoCarne" className={classes.input} style={{ width: '90%' }}
                            disabled >
                            {data.tipo === 'Bovina' ? <option value="Bovina" selected >Bovina</option> : <option value="Bovina" disabled>Bovina</option>}
                            {data.tipo === 'Aves' ? <option value="Aves" selected >Aves</option> : <option value="Aves" disabled>Aves</option>}
                            {data.tipo === 'Suina' ? <option value="Suina" selected >Suina</option> : <option value="Suina" disabled>Suina</option>}
                            {data.tipo === 'Peixes' ? <option value="Peixes" selected >Peixes</option> : <option value="Peixes" disabled>Peixes</option>}
                        </select>
                    </div>

                    {data.tipo === 'Bovina' ? <div style={{ width: '49.5%' }}>
                        <label className={classes.label} >Tipo de corte</label><br />
                        <div className={classes.label}>
                            <label>1ª</label>
                            {data.tipoCorte === '1' ? <input type="radio" id="pr" name="tipoCorte" value="1"
                                onClick={e => setData({
                                    "tipo": data.tipo,
                                    "tipoCorte": e.target.value,
                                    "nome": data.nome,
                                    "valor": data.valor
                                })}
                                style={{}} checked /> : <input type="radio" id="pr" name="tipoCorte" value="1"
                                    onClick={e => setData({
                                        "tipo": data.tipo,
                                        "tipoCorte": e.target.value,
                                        "nome": data.nome,
                                        "valor": data.valor
                                    })}
                                    style={{}} />}
                            
                            <label>2ª</label>
                            {data.tipoCorte === '2' ? <input type="radio" id="sc" name="tipoCorte" value="2"
                                onClick={e => setData({
                                    "tipo": data.tipo,
                                    "tipoCorte": e.target.value,
                                    "nome": data.nome,
                                    "valor": data.valor
                                })}
                                style={{}} checked /> : <input type="radio" id="sc" name="tipoCorte" value="2"
                                    onClick={e => setData({
                                        "tipo": data.tipo,
                                        "tipoCorte": e.target.value,
                                        "nome": data.nome,
                                        "valor": data.valor
                                    })}
                                    style={{}} />}
                            
                        </div>
                    </div> : <div></div>}
                </div>

                <div style={{ width: '95%' }}>
                    <label className={classes.label} >Nome da Carne </label><br />
                    <input name="codigo" type='text' value={data.nome} className={classes.input} style={{
                        width: '90%',
                        backgroundColor: '#620c0c',
                        color: 'white'
                    }}

                        onInput={e => setData({
                            "tipo": data.tipo,
                            "tipoCorte": data.tipoCorte,
                            "nome": e.target.value,
                            "valor": data.valor
                        })}
                    />
                </div>

                <div style={{ width: '95%' }}>
                    <label className={classes.label} >Valor por KG</label><br />
                    <input name="codigo" type='number' value={data.valor} className={classes.input} style={{
                        width: '90%',
                        backgroundColor: '#620c0c',
                        color: 'white'
                    }}

                        onInput={e => setData({
                            "tipo": data.tipo,
                            "tipoCorte": data.tipoCorte,
                            "nome": data.nome,
                            "valor": e.target.value
                        })}
                    />
                </div>

                <br />
                <button type="button" className={classes.button} onClick={() => updateFire(data)}>
                    CADASTRAR CARNE
                    </button>
            </div>
        </form>
    );
}