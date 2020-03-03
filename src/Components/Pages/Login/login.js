// login da pagina  

//<<<<<< importações da dependencias utilizadas >>>>>>>> 

import React from "react";

import { 
  MDBContainer, 
  MDBRow, 
  MDBCol, 
  MDBCard, 
  MDBCardBody, 
  MDBInput, 
  MDBBtn, 
} from 'mdbreact';

import { Container, Col, Row} from "react-bootstrap";


// <<<<<<< fim de importações >>>>>>>>>>

// Estilo da Pagina

import './login.css';

// <<<<<< Fim da importçao >>>>>>>

// Criaçao de Login 

const FormPage = () => {
  return (
 <div className="body">
  <Container>
    <Row>
      <Col md={{ span: 7, offset: 3 }}>
        <MDBContainer className="cont">
              <MDBRow>
                <MDBCol md="10" >
                  <MDBCard >
                    <MDBCardBody className="mx-4">
                      <div className="text-center" >
                        <h3 className="dark-grey-text mb-5">
                          <i class="fas fa-sign-in-alt black-text pr-3"></i>
                          <strong>Login</strong>
                        </h3>
                      </div>
                      <MDBInput 
                        
                        label="Usuario"
                        icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"

                      />
                      <MDBInput
                        
                        label="Senha"
                        icon="key"
                        group
                        type="password"
                        validate
                        containerClass="mb-0"
                        
                      />
                      <div className="text-center mb-3">
                        <MDBBtn

                          type="button"
                          gradient="blue"
                          rounded
                          className="btn-block z-depth-1a"
                          
                        >
                          Acessar
                        </MDBBtn>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
      </Col>        
    </Row>
  </Container>
  </div>
  );
};

export default FormPage;
