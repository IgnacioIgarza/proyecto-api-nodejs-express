// services
import {getAllProducts,addProduct,getProductById,deleteProduct} from '../models/product.model.js'

const getAll = async () => {
  return await getAllProducts();
};

const getProductId = async(id)=>{
  return await getProductById(id)
}

const createProduct = async (product) => {
  return await addProduct(product);
};

const deleteProd = async(id)=>{
  return await deleteProduct(id)
}

export default { getAll, createProduct, deleteProd, getProductId };