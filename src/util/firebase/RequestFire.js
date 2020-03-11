import firebase from '../../firebase'

var database = firebase.database();

export function GetFire( col ) {
    return new Promise((resolve, reject) => {
        const db = firebase.firestore()
        const data = db.collection(col).get()
        resolve(data)
    })
}

export function PostFire(col, contato) {
    const db = firebase.firestore()
    db.collection(col).add(contato)
}

export function UpdateFire(col, id, contato) {
    const db = firebase.firestore()
    return db.collection(col).doc(id).update(contato)
}

export function DeleteFire(col, id) {
    const db = firebase.firestore()
    return db.collection(col).doc(id).delete()
}

export function FiltroProdutoTipoFire(col , tipo) {
    return new Promise((resolve, reject) => {
        const db = firebase.firestore()
        const data = db.collection(col).where("tipo", "==", tipo).get()
        resolve(data)
    })
}

export function DetalheFire(col, id) {
    return new Promise((resolve, reject) => {
        const db = firebase.firestore()
        const data = db.collection(col).doc(id).get()
        resolve(data)
    })
}

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
        let fref = database.ref('/produtos/')

        let update = {}
        update[ref] = nome

        fref.update(update)
        resolve('Update')
    })    
}

export const get = ( ) => {
    return new Promise((resolve, reject) => {
        const fref = database.ref()

        fref.once('value').then(s => {
            let produtos = s.val()

            resolve(produtos)
            //Object.keys(produtos.produtos)
        })
    })    
}

export const getS = ( id  ) => {
    return new Promise((resolve, reject) => {
        const fref = database.ref()

        fref.once('value').then(s => {
            let produtos = s.val()

            Object.keys(produtos.produtos).map( (s , index) => {
                if(s === id){
                    resolve(Object.values(produtos.produtos)[index])
                }
            })         

        })
    }) 
}

export const del = ( ref ) => {
    return new Promise((resolve, reject) => {

        let fref = database.ref('/produtos/' + ref)
        fref.remove()
        resolve('deletado')

    })
    
}