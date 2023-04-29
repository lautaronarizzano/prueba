import Carts from '../dao/factory/carts.factory.js'

const cartsManager = new Carts()

const getCarts = async (req, res) => {
    try {
        const carts = await cartsManager.getAll()
        res.send({status: 'success', payload: carts})
    } catch (error) {
        res.status(500).send({ error })
    }
} 

const createCart = async (req, res) => {
    const cart = req.body
    try {
        const result = await cartsManager.addCart(cart)
        res.send({status: 'success', payload: result})
    } catch (error) {
        res.status(500).send({ error })
    }
}

const getCartById = async (req, res) => {
    const cid = req.params.cid
    try {
        const result = await cartsManager.getById(cid)
        res.send({status: 'success', payload: result})
    } catch (error) {
        res.status(500).send({ error })
    }
}

const addProductInCart = async (req, res) => {
    const cid = req.params.cid
    const pid = req.params.pid
    try {
        const result = await cartsManager.addProduct(cid, pid)
        res.send({status: 'success', message: 'The product with id ' + pid + ' was added successfully from cart ' + cid + '', payload:result})
    } catch (error) {
        res.status(500).send({error: 'el error es ' + error})
    }
}

const deleteProductInCart = async (req, res) => {
    const cid = req.params.cid;
    const pid = req.params.pid;
    try {
        await cartsManager.deleteProduct(cid, pid)
        res.send({status: 'success', message: 'The product with id ' + pid + ' was deleted successfully from cart ' + cid + ''})
    } catch (error) {
        res.status(500).send({error: 'el error es ' + error})
    }
}

const deleteCart = async (req, res) => {
    const cid = req.params.cid
    try {
        const result = await cartsManager.delete(cid)
        res.send({status: 'success', message: 'The cart with id '+ cid + 'was deleted successfully', payload: result})
    } catch (error) {
        res.status(500).send({error: 'el error es ' + error})
    }
}

const updateQuantity = async (req, res) => {
    const cid = req.params.cid;
    const pid = req.params.pid;
    const quantity = req.body
    try {
        const result = await cartsManager.updateQuantity(cid, pid, quantity)
        res.send({status: 'success', message: 'The product with id ' + pid + ' was changed it quantity from cart ' + cid + '', payload: result})
    } catch (error) {
        res.status(500).send({error: 'el error es ' + error})
    }
}

const updateCart = async (req, res) => {
    const cartId = req.params.cid;
    const products = req.body;
    try {
        const result = cartsManager.updateCart(cartId,products)
        return result
    } catch (error) {
        res.send({status: 'success',message: 'The cart with id ' + cartId + ' was updated successfully with the required products.'});
    }
}

const purcahseCart = async (req, res) => {
    const cartId = req.params.cid
}

export {
    getCarts,
    createCart,
    getCartById,
    addProductInCart,
    deleteProductInCart,
    deleteCart,
    updateQuantity,
    updateCart
}


