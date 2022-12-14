import { ShoppingCartSharp } from '@mui/icons-material';
import { Card, CardMedia, Grid, Container, Typography, Rating, CardContent, useTheme, CardActions, Button } from '@mui/material';
import React, { useEffect, useState } from 'react'


function Home() {
const theme = useTheme();
  const [products , setProducts] = useState([]);

  async function fetchAllProducts(){
    const responce = await fetch('https://fakestoreapi.com/products')
              const result = await responce.json();
              setProducts(result);
    }
  useEffect(()=>{
 fetchAllProducts()
  },[])
 
  return (
    <div>
      <Container sx={{py:8}} maxWidth="lg">
        <Grid container spacing={4}>
          {products.map(({title , id , price , description , rating , image})=>
          (<Grid item key={id} xs={12} md={3}>
            <Card sm={{height:"100%", display:"flx", flexDirextion:"column"}}>
              <CardMedia component="img" sx={{alignSelf:"center",width: theme.spacing(30),height:theme.spacing(30),objectFit:"contain" , pt:theme.spacing()}}
               image={image} alt={title}/>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom sx={{
                  overflow : "hidden" ,
                  textOverflow : "ellipsis",
                  display: "-webkit-box",
                 "-webkit-line-clamp" : "1",
                   "-webkit-box-orient" : "vertical"  
                }}>
                {title}
                </Typography>
                <Typography
                color = "text.secondary"
                paragraph
                 sx={{
                  overflow : "hidden" ,
                  textOverflow : "ellipsis",
                  display: "-webkit-box",
                 "-webkit-line-clamp" : "3",
                   "-webkit-box-orient" : "vertical"  
                }}>
                  {description} </Typography>
                <Typography fontSize= "large" paragraph >{price} </Typography>
                <Rating readOnly precision={0.5} value={rating.rate}></Rating>

              </CardContent>
              <CardActions
               sx={{
                alignSelf: "center",
              }}>
                 <Button variant="contained">
                  <ShoppingCartSharp />
                    Add to Cart
                 </Button>
              </CardActions>
            </Card>
          </Grid>))}
        </Grid>
      </Container>
    </div>
  )
}

export default Home