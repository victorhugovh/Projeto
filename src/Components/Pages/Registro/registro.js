// Parte responsavel para entrada de Registro para ser preenchida na tabela 

// <<<<<<< fim de importações >>>>>>>>>>

// importaçao do estilo 

import React from 'react';

import { 
    Col,
    Form,
    Container,
    Jumbotron
} from 'react-bootstrap';

// <<<<<< Fim da importçao >>>>>>>

// Estilo da Pagina

import './registro.css';

// <<<<<< Fim da importçao >>>>>>>

// Formulario de Registro 

export default function Registro() {
  return (
    <Jumbotron className="jumb">
            <Container className="cont1">
                <Form>

                    <Form.Row >

                        <Form.Group className="box" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="São Paulo" />
                        </Form.Group>

                        <Form.Group className="box" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Campinas" />
                        </Form.Group>

                    </Form.Row>

                    <Form.Row >

                        <Form.Group as={Col} className="text-center" controlId="Idoso">
                            <Form.Label>Idoso</Form.Label>
                            <Form.Control type="idoso" placeholder="Idoso" />
                        </Form.Group>

                        <Form.Group as={Col} className="text-center" controlId="Estudantes">
                            <Form.Label>Estudantes</Form.Label>
                            <Form.Control type="estudantes" placeholder="Estudantes" />
                        </Form.Group> 
                    
                        <Form.Group as={Col} className="text-center" controlId="Internet">
                            <Form.Label>Internet</Form.Label>
                            <Form.Control placeholder="Internet" />
                        </Form.Group>

                    </Form.Row>

                    <Form.Row>

                        <Form.Group as={Col} className="text-center" controlId="Normal">
                            <Form.Label>Normal</Form.Label>
                            <Form.Control placeholder="Normal" />
                        </Form.Group>

                        <Form.Group as={Col} className="text-center" controlId="horarios">
                            <Form.Label>Horarios</Form.Label>
                            <Form.Control as="select">
                                <option>Selecionar</option>
                                <option>04:00</option>
                                <option>06:00</option>
                                <option>07:00</option>
                                <option>08:00</option>
                                <option>10:30</option>
                                <option>12:00</option>
                                <option>12:20</option>
                                <option>13:30</option>
                                <option>13:50</option>
                                <option>15:30</option>
                                <option>15:40</option>
                                <option>16:10</option>
                                <option>17:00</option>
                                <option>17:10</option>
                                <option>17:50</option>
                                <option>18:30</option>
                                <option>18:40</option>
                                <option>20:00</option>
                                <option>20:20</option>
                                <option>Horario extra</option>
                            </Form.Control >
                        </Form.Group>

                        <Form.Group as={Col} className="text-center" controlId="total">
                            <Form.Label>Total</Form.Label>
                            <Form.Control />
                        </Form.Group>

                    </Form.Row>

                    <div class="text-center py-4 mt-3">
                        <button class="btn btn-outline" type="submit">Enviar<i
                        class="fa fa-paper-plane-o ml-2"></i></button>
                    </div>

                </Form>
            </Container>  
    </Jumbotron>  
  );
}