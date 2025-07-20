//model
import {db} from '../config/db.js'
import { collection,doc,getDocs,getDoc,addDoc,updateDoc,deleteDoc } from 'firebase/firestore'

const productCollection = collection(db,'productos')


//Método para buscar todos los productos
export const getAllProducts = async ()=>{
    try {
        const productsList = await getDocs(productCollection)
        const products =[]
        productsList.forEach(doc=>products.push({id:doc.id, ...doc.data()}))

        return products
    } catch (error) {
        throw new Error(("Error",error.message))
    }
}

//Métoodo para buscer producto por ID
export async function getProductById(id) {
    const productDoc = await getDoc(doc(productCollection,id));
    if(productDoc.exists()){
        return productDoc.data();
    }else{
        return null
    }
}

//Mètodo para crear producto
export const addProduct = async(product)=>{
    try {
        const newProduct = await addDoc(productCollection,product)
        return newProduct
    } catch (error) {
        throw new Error(("Error",error.message))
    }
}

//Método para borrar producto por ID
export async function deleteProduct(id) {
    try {
        await deleteDoc(doc(productCollection,id))
    } catch (error) {
        throw new Error(("Error",error.message))
    }
}

//Próx mejoras
//Validaciones
//Falta el médodo para modificar producto con updateDoc