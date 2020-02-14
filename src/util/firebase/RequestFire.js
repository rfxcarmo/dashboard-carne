import firebase from '../../firebase'

export function GetFire( col ) {
    return new Promise((resolve, reject) => {
        const db = firebase.firestore()
        const data = db.collection(col).get()
        resolve(data)
    })
}

export function PostFire(contato) {
    const db = firebase.firestore()
    db.collection("agenda").add(contato)
}

export function UpdateFire(id, contato) {
    const db = firebase.firestore()
    return db.collection("agenda").doc(id).update(contato)
}

export function DeleteFire(id) {
    const db = firebase.firestore()
    return db.collection("agenda").doc(id).delete()
}

export function OrdenaFire(busca) {
    return new Promise((resolve, reject) => {
        const db = firebase.firestore()
        const data = db.collection("agenda").where("nome", "==", busca).get()
        resolve(data)
    })
}