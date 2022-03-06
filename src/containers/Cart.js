import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { setProducts } from '../redux/actions/productAction.js';
const BaseURL = 'https://fakestoreapi.com/products/carts?limit=5';

const Cart = () => {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios.get(BaseURL).catch((err) => {
      console.log('ERROR : ', err);
    });
    dispatch(setProducts(response.data));
    console.log(BaseURL);
    console.log(response.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};
export default Cart;
