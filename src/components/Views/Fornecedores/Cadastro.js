import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import ListagemProdutosModal from './ListagemProdutosModal'
import { get, del } from '../../../util/firebase/RequestFire'
import { json } from './ModelJson'


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
        margin: '10px',
        fontFamily: 'Roboto'
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
        marginLeft: '10px',
        marginRight : '10px',
        border: 'none',
        width: '450px',
        height: '45px',
        overflow: 'hidden',
        cursor: 'pointer',
        fontSize: '18px',
        letterSpacing: '10.8px',
        color: '#ffffff'

    }
}));

export default function BasicTextFields({ id }) {
    const classes = useStyles();
    const [ div, setDiv ] = React.useState(true)
    const [ update , setUpdate ] = React.useState([])
    var auxData = json

    const mudaDiv = () => {
        div === true ? setDiv(false) : setDiv(true)
        setUpdate(auxData)
    }

    React.useEffect( () => {
        
    }, [])

    return (
        <form className={classes.root} noValidate autoComplete="off">
            {div === true ?
            <div>
            <div style={{ display: 'flex', marginBottom: '30px' }}>
                <div>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <label className={classes.label}>Codigo</label><br />
                            <input type='text' className={classes.input} style={{ width: '205px' }} />
                        </div>
                        <div>
                            <label className={classes.label} >Categoria</label><br />
                            <select className={classes.input} style={{ width: '205px' }}>
                                <option>Casa de Carnes</option>
                                <option>Frigorifico</option>
                                <option>Mesa de Carnes</option>
                            </select>
                        </div>
                    </div >

                    <div >
                        <div style={{ display: 'block' }}>
                            <label className={classes.label} >Nome do Fornecedor</label><br />
                            <input name="name" type='text' className={classes.input} style={{ width: '430px' }} //value={auxData.nomeFornecedor}
                            onInput={e => auxData.nomeFornecedor = e.target.value}
                            />
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <label className={classes.label}>Inscrição Municipal</label><br />
                                <input type='text' className={classes.input} style={{ width: '205px' }} //value={auxData.inscricaoMunicipal}
                                onInput={e => auxData.inscricaoMunicipal = e.target.value}/>
                            </div>
                            <div>
                                <label className={classes.label}>Inscrição Estadual</label><br />
                                <input type='text' className={classes.input} style={{ width: '205px' }} //value={auxData.inscricaoEstadual}
                                onInput={e => auxData.inscricaoEstadual = e.target.value}/>
                            </div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <label className={classes.label}>CEP</label><br />
                                <input type='text' className={classes.input} style={{ width: '205px' }} //value={auxData.CEP}
                                onInput={e => auxData.CEP = e.target.value}/>
                            </div>
                            <div>
                                <label className={classes.label}>Bairro</label><br />
                                <input type='text' className={classes.input} style={{ width: '205px' }} //value={auxData.bairro}
                                onInput={e => auxData.bairro = e.target.value}/>
                            </div>
                        </div>                        
                    </div>
                    <div style={{ display: 'block' }}>
                        <label className={classes.label} >Telefone</label><br />
                                <input name="codigo" type='text' className={classes.input} style={{ width: '430px' }} //value={auxData.telefone}
                                    onInput={e => auxData.telefone = e.target.value}/>
                    </div>
                </div>

                <div >
                    <div>
                        <label className={classes.label} >CNPJ</label><br />
                                <input name="codigo" type='text' className={classes.input} style={{ width: '430px' }} //value={auxData.CNPJ}
                                    onInput={e => auxData.CNPJ = e.target.value}/>
                    </div>
                    <div>
                        <label className={classes.label} >Email</label><br />
                                <input name="codigo" type='text' className={classes.input} style={{ width: '430px' }} //value={auxData.email}
                                    onInput={e => auxData.email = e.target.value}/>
                    </div>
                    <div>
                        <label className={classes.label} >Endereço</label><br />
                                <input name="codigo" type='text' className={classes.input} style={{ width: '430px' }} //value={auxData.endereco}
                                    onInput={e => auxData.endereco = e.target.value}/>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <label className={classes.label}>Cidade</label><br />
                                    <input type='text' className={classes.input} style={{ width: '205px' }} //value={auxData.cidade}
                                        onInput={e => auxData.cidade = e.target.value}/>
                        </div>
                        <div>
                            <label className={classes.label}>Estado</label><br />
                                    <input type='text' className={classes.input} style={{ width: '205px' }} //value={auxData.estado}
                                        onInput={e => auxData.estado = e.target.value}/>
                        </div>
                    </div>
                </div>
            </div>
            <Divider />
            <div style={{ marginBottom: '30px'}}> 
                <h2 className={classes.label} style={{fontSize: '20px'}}>Representante</h2>
                <div style={{display : 'flex'}}>
                    <div>
                        <label className={classes.label} >Nome</label><br />
                                <input name="codigo" type='text' className={classes.input} style={{ width: '430px' }} //value={auxData.representante.nome}
                                    onInput={e => auxData.representante.nome = e.target.value}/>
                    </div>
                    <div>
                        <label className={classes.label} >Telefone</label><br />
                                <input name="codigo" type='text' className={classes.input} style={{ width: '430px' }} //value={auxData.representante.telefone}
                                    onInput={e => auxData.representante.telefone = e.target.value}/>
                    </div>
                </div>                
                </div> </div> : <ListagemProdutosModal data={auxData} />}
            <div style={{display : 'flex'}}>
                <button type="button" onClick={() => mudaDiv()} className={classes.button} style={{ backgroundImage: 'linear-gradient(90deg, #f7d008 0%, #b38400 100%)'}}>
                    EDITAR PRODUTOS
            </button>
                <button type="button" className={classes.button}>
                    CADASTRAR CLIENTE
            </button>
            </div>
        </form>
    );
}