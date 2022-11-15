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

  //console.log(productId)

  const getProductItem = (e)=> {
    e.preventDefault()
   
    fetch(`https://moverzbackend.herokuapp.com/api/products/${productId}`)
    .then((response)=> response.json())
    .then((json)=>setProduct(json))
    .catch((error)=> console.log(error))
    .finally(()=>setLoading(false))
   
   
  }

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
              <Container className='product_container' fluid>
                <h3 className='product_header'>Tracking Details</h3>
                <Row className='top_row_container'>
                  <Col className='id_col' md="auto"><p className='product_id'>{product._id}</p></Col>
                  <Col  className='shipping_date' md="auto"><p className='shipping_date'><span>Shippment Date: </span>{product.delivered_date}</p></Col>
                </Row>
                <Row>
                  <Col md="auto"><img fluid src="data:image/png;base64,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" className="alert_images"/> </Col>
                  <Col><p className='status_text'><span className='country_text'>Status:  </span>{product.product_chargeable}</p></Col>
                  <Col md="auto"><img fluid src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAACqCAMAAABVlWm8AAAAilBMVEXOESYAaz/80RYAAADdUCBUjTFURgdtWgkDAgCfhA4IBwHyyRULCQFcTAiOdgzsxBVNQAesjw9+aAvkvRRANQaYfg1GOgbuxhWkiA4PDAETEAIrJAQ1LAW+nRGTeg3bthPPqxJPhS6ylBBfTwgbFgLVsROFbww5MAUuJwRHOwYdGALGpBEiHANqWAnX/GVVAAAC0klEQVR4nO2ba2/aQBBF3W5rjA0Y8wwQoCUlJH38/79XYoxZFBaXKLm30tzzMUHKPcLenRlNokgIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQ/x1fbBN95tIi/32y/zAZcgOQ/VduxQ1A9h+5ETcA1z9PHPkF4PqPnXNjagKu/2TvP6EmoPrn6d4/yZkRqP5t90KbGYHq3y/9+8wITP9pWvqnU2IGpv+dO3BHzMD0jyv/mJiB6J91Kv9OxgtB9C/ckYIXgujfrf27vBA8/2xW+894LwDPf+NObGgpeP4Pnv8DLQXPf+75z2kpaP7+4+/ckhXj4/2zQXyJxZn/4uJnBh9/LgK+/6zl3kYXcC1Anv9i3iz7ihmkLcC8/+vdzfr3a0gy1Pk3SG7Tb4FKItj5v/xxg/18g4qFu//yuNm7oo8bCSLv/3anWX1P2gNmgtY/20WzvVt8Q0bC1n//UAogLn0PdP3bUApgLn0PeP1/tRQAXfoehP4nWAokqEvfg9H/LdOL+imjCWT4bwPf/5aQheH/GPB/JGRh+N+HTj9CFoL/Onj8w09/in8v6I8sfCsI/uECYIcPg/cfhicBhF0ovP8qqO8Iy4B4/5Ev3F+fTQXwy4Bw/9x7/MtO358K4F8AuP/4ZFt1+tun04/gy4Bw/0ntWnf63lTgGR0H7Z8fe5+zTr+eCsCXAdH+7Up0d17rDY+nInoZEO1/WPlLBq9+0Tuci+hlQLD/YeXv56VO/9fv8koALwOC/cuVv8B4f1qWAuABINg/vjrefykFwMuA4Pl35/p4f18KgJcBsf5F03h/XwpglwGx/n+a3+4C+x9x0Vck39/pM+9H9Mk28reN/G0jf9vI3zbyt438bSN/28jfNvK3jfxtI3/byN828reN/G0jf9vI3zbyt438bSN/28jfNvK3jfxtI3/byN828reN/G0jf9tY9/8LTXXDf3ICbegAAAAASUVORK5CYII=" className="alert_images"/>  </Col>   
                  <Col md="auto"><img fluid src="data:image/png;base64,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" className="alert_images"/> </Col>

                </Row>

                <Col className='id_col' md="auto"><p className='product_beneath_id'>{product._id}</p></Col>


                <Row>
                  <Row>

                  </Row>
                  <Row>
                    <p >  ❖  <span className='country_text'>Current Country: </span>{product.product_source} </p>
                    <div className='morroco_handler'>
                    <img fluid src="data:image/png;base64,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" className="alert_images"/>
                    </div>
                    <p>  ❖  <span className='country_text'>Origin Status: </span>{product.product_status} </p>   
       
                    <Row>
                    <Col><p>  ❖  <span className='country_text'>Country Origin: </span>{product.product_origin} </p></Col>
                    </Row>
                    
                  </Row>

                  <Row>
                  <p>  ❖ <span className='country_text'>Country Address: </span>{product.product_destination1} </p>
                  <p>  ❖ <span className='country_text'>Destination Address: </span>{product.product_destination2} </p>
                  <p>  ❖ <span className='country_text'>Set Destination: </span>{product.product_setdestination} </p>
                  </Row>
                </Row>

                <Row>
                  <p>  ❖ <span className='country_text'>Product Content: </span> {product.product_packages} </p>
                  <p>  ❖ <span className='country_text'>Product Weight: </span> {product.product_weight} </p>
                  <p>  ❖ <span className='country_text'>Shipping Cost: </span> {product.product_tax_shipping_cost} </p>
                </Row>

                <Row><h3 className='myreference'>{product.product_reference} </h3></Row>
                
              </Container>
              
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