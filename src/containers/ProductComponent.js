import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
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

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((prd) => {
    const { id, title, image, price, category } = prd;
    return (
      <Grid justify="center" item xs={9} sm={6} md={3} key={id}>
        <NavLink to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </NavLink>
      </Grid>
    );
  });
  // const { id, title, catagory } = products[0];
  return <>{renderList} </>;
};
export default ProductComponent;
