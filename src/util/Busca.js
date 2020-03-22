export const buscador = (text , array ) => {

    return new Promise(resolve => {
        if(text === ""){
            resolve(array)
        }else{
            let arr = text.toString()
            arr.toLowerCase()
            arr = arr.split('')

            const textL = arr.length

            let arrBusca = []
            let cont = 0

            array.map(map => {
                let sp = map.nome.toString()
                sp = sp.toLowerCase()
                sp = sp.split('')

                arr.map((mapi, index) => {
                    if (mapi === sp[index]) {
                        cont++
                        console.log(cont)
                    }
                })

                if (cont === textL) {
                    arrBusca.push(map)
                    cont = 0
                }
            })
            resolve(arrBusca)
        }        
    })    
}