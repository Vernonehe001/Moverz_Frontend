import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./SearchForm.css";
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import { useState} from 'react';
import Axios from '../Axios';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


const SearchForm = () => {

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true)
  const [productId, setProductId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

 

  //635e954680ce1128231e760b
  const handleproductId = event=>{
    setProductId(event.target.value)
  }

  console.log(productId)

  const getProductItem = (e)=> {
    e.preventDefault()
    if(productId && productId.length >0){
      fetch(`https://moverzbackend.herokuapp.com/api/products/${productId}`)
    .then((response)=> response.json())
    .then((json)=>setProduct(json))
    .catch((error)=> console.log(error))
    .finally(()=>setLoading(false))
    }
    else{
      <p>Enter product ID</p>
    }
  }


  console.log(product)

/*

  useEffect(()=>{
    const fetchProduct = async() =>{
      try{
        const response = await Axios.get("/api/products");
        setProduct(response.data)
      }
      catch(err){
        if(err.response){
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        }
        else{
          console.log(`Error: ${err.message}`)
        }
      }
    }

    fetchProduct();
  },[])

  console.log(product)

 
 

   const getProdutById= (_id) =>{
    _id = productId
    const productList = product.filter((post)=>post._id !== _id);
    setProduct(productList);
  }

   

  console.log(product)

  
  useEffect(()=>{
    fetchData()
    
  },[])

  const fetchData = ()=> {
    fetch("https://moverzbackend.herokuapp.com/api/products/")
    .then((response)=> response.json())
    .then((json)=>setProduct(json))
    .catch((error)=> console.log(error))
  }

  console.log(product)
  

   
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
            productId && productId?.length > 0 && productId === product._id?  (
              
              <div className='product_item_container'>
              <Container className='product_main_container' >
                   <Col className='parent_sub-container'>
                   <Col md="auto" className='product_id_header'><p>Product ID:{product._id} </p></Col>   
                   <Col md="auto" className='product_delivery-date'><p>Shippment Date:{product.delivered_date} </p></Col>
                   </Col>


                   <Row className='parent_row'>
                   <Row className='product_top'>                                     
                    <Col md="auto" className='product_status'><p>Product Status{product.product_status} </p></Col>                    
                   </Row>

                   <Row className='country_row'>
                   <Col><p>Product Origin: {product.product_source}</p></Col>
                   </Row>
           
                  
                    <Row className='product_loc_container'>
                    <Col>Product Content{product.product_packages} </Col>
                    <Col>{product.product_description} </Col>

                    <Col>Product Set Destination: {product.product_destination} </Col>
                   </Row>
           
                   <Row className='product_address_container'>
                       
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
               
                    </Row>    
                       
              </Container>
              </div>
            )
                        
            :
            (
              <p className='loading_container'>Enter product's unique ID</p>
            )

          }
    </Container>
  )
}

export default SearchForm