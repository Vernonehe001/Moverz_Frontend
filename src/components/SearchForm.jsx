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
                  <Col md="auto"><img fluid src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAElBMVEUAAAD/zgDdAADnAADaAAD/2AAtsSEoAAAA+ElEQVR4nO3QMQGAMAAEsYeCf8tIuI0pkZANAAAAAAAAAAAAAAAAAAAAgB8dwm6CoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKewh7CbsIipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUofMGTNC8HkSxoAAAAASUVORK5CYII=" className="alert_images"/> </Col>

                </Row>

                <Col className='id_col' md="auto"><p className='product_beneath_id'>{product._id}</p></Col>


                <Row>
                  <Row>

                  </Row>
                  <Row>
                    <p >  ❖  <span className='country_text'>Current Country: </span>{product.product_source} </p>
                    <div className='morroco_handler'>
                    <img fluid src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAnFBMVEXBJy0zzGbEICsm0mifYz8wzmcg1Gkuz2fCJCyhYD7BKC3ICyjDISzGGCrHFCk7xGM0yWU7w2O+Ky6tTDhQtl6ZbEOkWz1IvGCWcER7kVCyQzVvnVS2OzONe0hdrFqFhEtZsFtpoVaBik2pVTuQeEdlpVjMACW5NTF5klB1l1Jkp1hxm1SPc0ZOt16PekedZkGwRzaJgEqnVzsM2mx23sISAAAGBUlEQVR4nO2cbVvaMBSGaWOSbmnSFgUUFFEUROfQ7f//t7VN0gRQ0X1Bkuf2wwaU62oP50nOW9vrAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBPZoU/g+yFv5aFP4buR9RgcZYt08HeQHvokvhnqntyoQ5/ENyNNaIkFZYN0SBIyhHh85IonfAVH8REFTWghDn0a34n8lCVJwk7zQ5/IN0Le8tomHGGbhxjR2iZ0BPF0ZJckaSCXiGUt8srY5ArisYgZbW1CZxCPIetrN6kdpQ/xaNLzzibnCGU16pEbm/BH5IEaZU1SGwWLbEt6QjqbkBOIp0E+eX4ygXgaVEk7m6CI0pLPnXRq8cyRB9bSueCeTfgFHMXmf0lSaqOMsKD0sjHTovmlJcTGEI98bW1Bi4Veask1xCPOWlPwp8WkXVfoc/R5oM3/yA9pQje2jD0PTPUyQpM8y6kWz13soayatorh98qmgnwavXiMc5ynXcmA/4xbPOnaLCe9rP4z/4+8ma7MZtMWHU0JkgfdTE/3IkxQ8lvVL9QdoQ2J2v/FQ1/a/9If/NjgZIv1+uTOLCH6yEFZNZR3O4duM+gf+uL+k/ScMfIxpkxQmJdUs+dLhLHjXXLk5civA7xBYf6hHx+2CRktjzj+z+WEfXC5tNg0zaeg7Ekdd5oozsn7RqHGP4ryCybh50cf08lxxd+9wK9Lh1TjI9aNJZeP7y0qxj/o56XD7uVx68Yirnyj0HrbMBj/KN07zPgU7d7wpUfJ76PXjUWdlp1+6Nmy19eoqYlb5U+LvNFx7VSZN9L+WWcUXp4GFOGm2ZS4K5uLrCU3+c06zSxd/pPr12KYdCYh0+xoo5K3yMR1tylTci2azDcdmCDWu/0g62mH0nlgJm7dt5j+VkioudOP/sXVjamX+IKw9ZQmD0yzmeddfwLSjSXte1dY1CuDTN6oq3V1N7mxCpGzflC6sWTiwtPP1WJolo6N+mu2NO8OF1fE6eYiON1YxJB2vzy7Wb1Zp7d1/NWEdV7FfwSzBe8il8/eCtGGJ9v9HHmtj3CN9eNO+faTq5XTT1nR3b6f7QvaXIiy1ZGnfPsRa955AK1KWm3LQlTms/YwygcB68biF1XqTGdnjsDMGWg/IdVl0LqxNEWVzij0bsdPTDO9MQq7CSTl249fVGEPamMvVg+ktOIhOwYLGDmu3Lby7IVjdcpHukpT8RKFbizp0u21nA5t2K7aAMbYhCyDDF3fpQ7hK2uTeru9bcNUm/KVWjyxDVWrR04LLyyb9dL6b2ZXV+0/kQ1V53WQomM2G9TOFy5xLkxoEsue02JHpyvuksLVToE/rqHqrnVuywG0LLrskCenppke1VC1MKWTV6GLKhtry1lfmLm/MqLwxI5Ok3Gmiyr+HnQhsu7+wIiGqm1K094nKoaF63nRsi2VmDnimIaqxShxl1znhM4kxXOb8+n7jes1OBrx5GNPGmKwWTto28H5qRVXLOIxpbRmCc3l01aNibJJnQuL2Iaqbcl1ouTSr6XYPGd0KaUp1p5FIp6sb+46WC9OuNetcPEbH9iifixD1akeYqN0o7dxt/jt9S5WVjyRDFWbVh+deT3kplQiX1wsS2amvz6NI5TN7TyFC10f88Yd0txZyX7Io9COHR3ooOzVdPky8bo9/hbHULVpnXfwcu704Xfa9adBD1VbZLnhCm05ydEVlqwTxXBzbf5nY5DLlB0d/sxJa7Nh+KGsfPDE4ZWnHWqY+IdE8IQy4QqO702VNA0N50nhP6EsH7se4Fa7y5EpF80l7CV08dhRiiaCX7/vAcJF/eE/oUw8GwfYM1XissPgn1BmR7Mom+yZKsmVrSKE/oQym/+RT9xIYKtNoT+hTOd/n7yRQF5WbVE/7CeU6ZFgdp9+bivJ5U2zS/Ggn1DWjE5/6UYC8YvQwJvpdf7Xjgt/HvlS8eYm9XARlE3zr/3oafrIeMA2yYd/v34jQSZe/wbcTJcPb6R8+1HzoPPA//u9Q094AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwlPwDO+1SMe0BE14AAAAASUVORK5CYII=" className="alert_images"/>
                    </div>
                    <p>  ❖  <span className='country_text'>Origin Status: </span>{product.product_status} </p>   
       
                    <Row>
                    <Col><p>  ❖  <span className='country_text'>Country Origin: </span>{product.product_origin} </p></Col>
                    <Col>Origin Status: Delivered <img fluid src="data:image/png;base64,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" className="alert_images"/> </Col>
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