import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./SearchForm.css";
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import Axios from '../Axios';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const SearchForm = () => {

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true)
  const [productId, setProductId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('')


  const handleproductId = event=>{
      setProductId(event.target.value)
  }

 
  const getProductItem = event=>{
    event.preventDefault();
    setLoading(true);

    Axios(`/api/products/${productId}`)
    .then((response) => {
      setProduct(response.data)
    })
    .catch((err)=>{
      console.log(err)
    })
    .finally(()=>setLoading(false))
  }

  console.log(product)

   /*

  const handleProduct = async(e) =>{
    e.preventDefault();

    setLoading(true);

    try{
      const response = await fetch(
        `http://localhost:8898/api/products/${productId}`,
        {
          method:'GET',
          headers: {
            Accept:'application/json'
          },
        }
      );

      if (!response.ok){
        throw new Error (`Error! status: ${response.status}`)
      } 

      const result = await response.json();

      console.log('result is: ', JSON.stringify(result, null,4));

      setProduct(result);
    }

    catch(err){
      setErr(err.message);
    }
    finally{
      setIsLoading(false)
    }
  }

  console.log(product)
*/

   
  return (
    <Container>
        <div className='search_container'>
            <div className='search_header'>
                <h3>Track your Mineral Products</h3>
            </div>
            <Form>
            <div className='serch_box-container'>
            <InputGroup className="mb-3">
            <Form.Control
            placeholder="Input tracking number: R6755S784343323"
            value={productId}
            onChange={handleproductId}
            />
            </InputGroup>
            </div>
            <div className='container_button'>
            <Button 
            type='submit'
            variant="outline-secondary"
            onClick={getProductItem}
            >
              Search
            </Button>
          </div>
            </Form>
      </div>
          {
            loading ?  (
              <p className='loading_container'>Enter product's unique ID</p>
            )
                        
            :
            (
              <div>
              <Container className='product_main_container' >
                   <Row className='product_top'>          
                    <Col md="auto" className='product_status'><p>{product._id} </p></Col>          
                    <Col md="auto" className='product_status'><p>{product.product_status} </p></Col>
                    <Col md="auto" className='product_status'><p>{product.delivered_date} </p></Col>
                    
                   </Row>
           
                  
                    <Row className='product_loc_container'>
                    <Col>{product.product_packages} </Col>
                    <Col>{product.product_description} </Col>
                    <Col><p>{product.product_origin}</p></Col>
                    <Col>{product.product_destination} </Col>
                   </Row>
           
                   <Row className='product_address_container'>
                       <p>
                      {product.product_source}
                       </p>
                       <Col md="auto" >{product.product_description} </Col>
                       <Col md="auto" >{product.product_weight} </Col>
                    
                   </Row>
                    <Col className='origin_container' md="auto" ><p>{product.product_destination1}</p></Col>
                   <Row className='product_dest_add_container'>
                       <p>
                        {product.product_setdestination} 
                       </p>
                       <p>{product.product_tax_shipping_cost} </p>
                   </Row>
           
                   <Row>
                       <p>{product.product_reference} </p>
                       <p>{product.productID} </p>
                   </Row>
                   
                       
              </Container>
              </div>
            )

          }
    </Container>
  )
}

export default SearchForm