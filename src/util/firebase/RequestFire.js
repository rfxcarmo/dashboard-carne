import firebase from '../../firebase'
const database = firebase.database();

export const add = (col , data) => {
    return new Promise( (resolve, reject) => {
        const fref = database.ref()
        const id_carne = fref.child(col).push().key

        let update = {}
        update[`/${col}/` + id_carne] = data

        fref.update(update)
        resolve('ok')
    })
}

export const update = (ref, nome , col) => {
    return new Promise((resolve, reject) => {
        let fref = database.ref(col)

        let update = {}
        update[ref] = nome

        fref.update(update)
        resolve('Update')
    })    
}

export const get = ( col ) => {
    return new Promise((resolve, reject) => {
        const fref = database.ref()

        fref.once('value').then(s => {
            let value = s.val()
            resolve(value)
        })
    })    
}

export const getS = (col, id  ) => {
    return new Promise((resolve, reject) => {
        const fref = database.ref()

        fref.once('value').then(s => {
            let val = s.val()

            switch(col){
                case 'produtos' :
                    Object.keys(val.produtos).map((s, index) => {
                        if (s === id) {
                            resolve(Object.values(val.produtos)[index])
                        }
                    })
                break
                case 'clientes' : 
                    Object.keys(val.clientes).map((s, index) => {
                        if (s === id) {
                            resolve(Object.values(val.clientes)[index])
                        }
                    })
                break
                case 'fornecedores':
                    Object.keys(val.fornecedores).map((s, index) => {
                        if (s === id) {
                            resolve(Object.values(val.fornecedores)[index])
                        }
                    })
                    break
            }                
        })
    }) 
}

export const del = (col, ref ) => {
    return new Promise((resolve, reject) => {

        let fref = database.ref(col + ref)
        fref.remove()
        resolve('deletado')

    })
    
}