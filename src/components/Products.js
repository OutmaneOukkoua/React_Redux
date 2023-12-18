import { useDispatch, useSelector } from "react-redux";
// import { AddProducts, FetchProducts } from "../store/actions/productAction";

import { AddProducts, FetchProducts } from "../RTK/slices/productSlice";
import { useEffect } from "react";
function Products(){
    const products = useSelector((state)=>state.products);
    const dispatch = useDispatch();
    useEffect(()=>{
        // dispatch(FetchProducts()) 
        
         dispatch(FetchProducts())  

    },[])
    return(<>
        <p>product page</p>
        <button onClick={()=>{dispatch(AddProducts({id : 2 , title : 'products 2'}))}}>Add Products</button>
        {products.map((product)=>(<h2 key={product.id}>{product.title}</h2>))}
        </>)
}
export default Products;