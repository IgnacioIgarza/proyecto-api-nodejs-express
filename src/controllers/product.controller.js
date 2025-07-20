// controller

import productService from "../services/product.service.js";

// import userService from '../services/product.service.js'
const getProducts = async(req, res) => {
    try {
        const products = await productService.getAll()
        if(products.length === 0) return res.status(204).json({message:"No hay datos disponibles, lista de productos vacía"})
        res.status(200).json({message:"Lista de productos",payload: products})
    } catch (error) {
        res.status(500).json({message:"Error interno del servidor",error: error.message})
    }
};

const getProductsId = async(req, res) => {
    try {
        const product = await productService.getProductId(req.params.id)
        if(!product) return res.status(404).json({message:"ID no encontrado"})
            
        res.status(200).json({message:"Producto encontrado",payload: product})
    } catch (error) {
        res.status(500).json({message:"Error interno del servidor",error: error.message})
    }
};

const createProduct = async(req, res) => {
    try {
        const {nombre, precio, stock, disponible} = req.body
        //Validar campos
        const newProduct = {nombre, precio:+precio, stock:stock, disponible:disponible || false} //inicializacion condic segun esté disp
        await productService.createProduct(newProduct)
        res.status(201).json({message:"Producto creado con éxito",payload: newProduct})
    } catch (error) {
        res.status(500).json({message:"Error interno del servidor",error: error.message})
    }
};

const deleteProduct = async (req, res) => {
    try {
        const product = await productService.getProductId(req.params.id)
        if(!product) return res.status(404).json({message:"ID no encontrado"})
        res.status(200).json({message:"Producto encontrado y eliminado",payload: product})
        await productService.deleteProd(req.params.id)

        //res.status(200).json({message:"Producto eliminado"})
    } catch (error) {
        res.status(500).json({message:"Error interno del servidor",error: error.message})
    }
}

export default { getProducts, createProduct, getProductsId, deleteProduct };
