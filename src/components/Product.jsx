import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import "./Product.css"

/*
productId,
    product_db_id,
    picking_date,
    origin,
    destination,
    from_destination,
    to_destination,
    const_ref,
    product_status
    */


const Product = (props) => {

    const displayProducts = (props) =>{
        const {mynotes} = props;

    if(mynotes.length>0){
        return (
            mynotes.map((note,index) => {
                console.log(note);

                return (
                    <Container key={note._id} className='product_main_container' >
                <Row>
                    <div className='heading'>
                        <Col className='product_id_col'><h6>{note.product_db_id} </h6></Col>
                        <Col className='product_status'><p>{note.product_status} </p></Col>
                        <Col className='product_date_col'><h6>{note.picking_date} </h6></Col>
                    </div>
                </Row>
        
                <Row className='product_loc_container'>
                    <Col>
                    <p>{note.origin}</p>
                    </Col>
                    <Col>{note.destination} </Col>
                </Row>
        
                <Row className='product_address_container'>
                    <p>
                   {`From: ${note.from_destination}`}
                    </p>
                </Row>
        
                <Row className='product_dest_add_container'>
                    <p>
                    To: {`To: ${note.to_destination} `}
                    </p>
                </Row>
        
                <Row>
                    <p>{note.const_ref} </p>
                    <p>{note.productId} </p>
                </Row>
                    
            </Container>
                )
            })
        )
    }

    else{
        return (<h3>Product unavailable</h3> )
    }
    }

    return (
        <>
        {
            displayProducts(props)
        }
        </>
    )
  
  
}

export default Product