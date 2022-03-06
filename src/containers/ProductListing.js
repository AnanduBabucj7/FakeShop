import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { setProducts } from '../redux/actions/productAction.js';
const BaseURL = 'https://fakestoreapi.com/products/';
import {
  Typography,
  ButtonGroup,
  Button,
  Card,
  Container,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Toolbar,
  Grid,
  AppBar,
} from '@mui/material';
const ProductListing = () => {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios.get(BaseURL).catch((err) => {
      console.log('ERROR : ', err);
    });
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Grid container justifyContent="center" spacing={4} className="ui grid container">
      <ProductComponent />
    </Grid>
  );
};
export default ProductListing;
