import firebase from '../../firebase'

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