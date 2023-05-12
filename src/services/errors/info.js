export const incompleteFieldError = () => {
    return `El producto que usted quiere agregar le faltan campos. Este producto debe tener los siguientes campos:
    title, description, price, thumbnail, code, stock, category`
}
export const codeAlreadyExistsError = (code) => {
    return `El product id no coincide con ninguno de los productos.
    el product id que usted utilizo es: ${pid}`
}

export const cartNotFound =  (cid) => {
    return `El carrito con el id ${cid} no esta disponible o no existe.`
}

