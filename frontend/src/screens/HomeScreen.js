import React,{  useState,useEffect} from 'react'
import { Row,Col } from 'react-bootstrap' 
import Product from '../components/Product' 
import products from '../products'
import axios from 'axios'

function HomeScreen() {
   
    
    return (
                    <div>
                        <hl>Nos produits Gamers</hl>
                        <Row>
                            {products.map(product=>(
                                    <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
                                        <Product product={product} />
                                    </Col>
                            ))}

                        </Row> 
                    </div>
        )
                            }
export default HomeScreen
