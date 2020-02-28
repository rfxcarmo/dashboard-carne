import React from 'react'
import { useLocation } from "react-router-dom";
import { DetalheFire } from '../../../util/firebase/RequestFire'


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function DetalhesFrigo(){
    let query = useQuery();
    const [detalhes, setDetalhes] = React.useState('')

    React.useEffect( () => {
        DetalheFire("clientes", query.get("id"))
        .then( d => {
            let view = d.data()
            let retorno = <div>
                <h1>{view.nome}</h1>
                <h1>{view.cnpj}</h1>
                <h1>{view.email}</h1>
                <h1>{view.telefone}</h1>
            </div>

            setDetalhes(retorno)
        })
    },[])
    
    return(<h1>{detalhes}</h1>)
}