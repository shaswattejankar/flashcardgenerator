import React from "react";
import { Container } from "react-bootstrap";
import './page1.css'
import {FormikForm} from './FormikForm';


const page1 = () => {
    return(
        <>
            <Container className="container2">
                <FormikForm/>
            </Container>      
        </>   
    )
}

export default page1