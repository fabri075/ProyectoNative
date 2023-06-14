import { ADD_PRODUCT } from "../actions/products.action";
import Product from "../../../models/Product";

const initialState = {
    products: [],
  };
  
  const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_PRODUCT:
        const newProduct = new Product(
          Date.now(),
          action.payload.title,
          action.payload.description,
          action.payload.image
        );
        return { ...state, products: state.products.concat(newProduct) };
      default:
        return state;
    }
  };
  
export default ProductReducer;