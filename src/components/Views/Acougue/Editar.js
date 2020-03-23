import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { json } from './ModelJsonClientes'
import { add } from '../../../util/firebase/RequestFire'
import { update, getS } from '../../../util/firebase/RequestFire'


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
    label: {
        fontSize: '15px',
        fontWeight: 300,
        letterSpacing: '1px',
        color: '#a40000',
        margin: '10px'
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
        width: '519px',
        height: '45px',
        overflow: 'hidden',
        cursor: 'pointer',
        fontSize: '18px',
        letterSpacing: '10.8px',
        color: '#ffffff'

    }
}));

export default function BasicTextFields({ fun , id , close }) {
    const classes = useStyles();
    const [model, setModel] = React.useState({})

    React.useEffect(() => {
        console.log(id)
        getS('clientes' , id)
            .then(s => {
                setModel(s)
                console.log(s)
            })
    }, [])

    const updateFire = (data) => {
        update(id, data, '/clientes/').then(s => {
            alert('Editado com sucesso')
            fun()
            close()
        })
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div style={{ display: 'flex', marginBottom: '30px' }}>
                <div>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <label className={classes.label}>Status</label><br />
                            <select id="tipoPessoa" className={classes.input} style={{ width: '205px' }} onChange={e => setModel({ ...model, ['status']: e.target.value })}>
                                <option value="#04ff4f" >Verde</option>
                                <option value="#ffdf0f" >Espera</option>
                                <option value="#ff665c" >Negativo</option>
                            </select>
                        </div>
                        <div>
                            <label className={classes.label} >Tipo de Pessoa</label><br />
                            <select id="tipoPessoa" className={classes.input} style={{ width: '205px' }} >
                                <option value="Fisica" >Fisica</option>
                                <option value="Juridica" >Juridica</option>
                            </select>
                        </div>
                    </div >

                    <div >
                        <div style={{ display: 'block' }}>
                            <label className={classes.label} >Nome</label><br />
                            <input name="codigo" type='text' className={classes.input} style={{ width: '430px' }} 
                                onInput={e => setModel({...model , ['nome'] : e.target.value})} value={model.nome}/>
                        </div>
                        <div style={{ display: 'block' }}>
                            <label className={classes.label} >Endereço</label><br />
                            <input name="codigo" type='text' className={classes.input} style={{ width: '430px' }} 
                                onInput={e => setModel({ ...model, ['endereco']: e.target.value })} value={model.endereco}/>
                        </div>
                        <div style={{ display: 'block' }}>
                            <label className={classes.label} >Email</label><br />
                            <input name="codigo" type='text' className={classes.input} style={{ width: '430px' }} 
                                onInput={e => setModel({ ...model, ['email']: e.target.value })} value={model.email}/>
                        </div>
                    </div>

                    <div style={{ display: 'flex' }}>
                        <div>
                            <label className={classes.label} >Cidade</label><br />
                            <input name="codigo" type='text' className={classes.input} style={{ width: '205px' }} 
                                onInput={e => setModel({ ...model, ['cidade']: e.target.value })} value={model.cidade}/>
                        </div>
                        <div>
                            <label className={classes.label} >Estado</label><br />
                            <input name="codigo" type='text' className={classes.input} style={{ width: '205px' }} 
                                onInput={e => setModel({ ...model, ['estado']: e.target.value })} value={model.estado}/>
                        </div>
                    </div>
                </div>

                <div >
                    <div>
                        <label className={classes.label} >CNPJ</label><br />
                        <input name="codigo" type='text' className={classes.input} style={{ width: '430px' }} 
                            onInput={e => setModel({ ...model, ['cnpj']: e.target.value })} value={model.cnpj}/>
                    </div>
                    <div>
                        <label className={classes.label} >RG</label><br />
                        <input name="codigo" type='text' className={classes.input} style={{ width: '430px' }} 
                            onInput={e => setModel({ ...model, ['rg']: e.target.value })} value={model.rg}/>
                    </div>
                    <div>
                        <label className={classes.label} >CEP</label><br />
                        <input name="codigo" type='text' className={classes.input} style={{ width: '430px' }} 
                            onInput={e => setModel({ ...model, ['cep']: e.target.value })} value={model.cep}/>
                    </div>
                    <div>
                        <label className={classes.label} >Bairro</label><br />
                        <input name="codigo" type='text' className={classes.input} style={{ width: '430px' }} 
                            onInput={e => setModel({ ...model, ['bairro']: e.target.value })} value={model.bairro}/>
                    </div>
                    <div>
                        <label className={classes.label} >Telefone</label><br />
                        <input name="codigo" type='text' className={classes.input} style={{ width: '430px' }} 
                            onInput={e => setModel({ ...model, ['telefone']: e.target.value })} value={model.telefone}/>
                    </div>
                </div>
            </div>
            {/* <div style={{ marginBottom: '30px' }}>
                <h2 className={classes.label} style={{ fontSize: '20px' }}>Representante</h2>
                <div style={{ display: 'flex' }}>
                    <div>
                        <label className={classes.label} >Nome</label><br />
                        <input name="codigo" type='text' className={classes.input} style={{ width: '430px' }} value={model.representante.nome}
                            onInput={e => model.representante.nome = e.target.value} />
                    </div>
                    <div>
                        <label className={classes.label} >Telefone</label><br />
                        <input name="codigo" type='text' className={classes.input} style={{ width: '430px' }} value={model.representante.telefone}
                            onInput={e => model.representante.telefone = e.target.value} />
                    </div>
                </div>
            </div> */}
            <button type="button" className={classes.button} onClick={() => updateFire(model)}>
                CADASTRAR CLIENTE
            </button>
        </form>
    );
}