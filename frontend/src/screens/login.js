import React,{  useState,useEffect} from 'react'
import { Row,Col } from 'react-bootstrap' 
import Product from '../components/Product' 
import products from '../products'
import axios from 'axios'

function login() {
   
    
    return (
                    <div>
                            <h4>Connexion</h4>

                            <div>
                            username : <input type="text" placeholder="  Entrer votre username"></input>
                            </div>

                            <div>
                            password : <input type="password" placeholder="  Entrer votre password "></input>
                            </div>

                            <button type="submit"   >Se connecter</button>
                            
                                 
                            
                    </div>
        )
                            }
export default login