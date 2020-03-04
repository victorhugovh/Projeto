// Criaçao da Tabela de embarque 

//<<<<<< importações da dependencias utilizadas >>>>>>>> 

import React from 'react';

import { 
  Table
} from 'react-bootstrap';

import './embarque.css'

// <<<<<<< fim de importações >>>>>>>>>>

//criaçao da tabela de Embarque 

export default function Embarque() {
  return (
    <>
        <div className="div1">
          <Table striped bordered hover variant="dark">

            <thead>
              <tr>

                <th><b>Horarios</b></th> 
                <th>Idoso</th>
                <th>Estudantes</th>
                <th>Internet</th>
                <th>Normal</th>
                <th>Total</th>
              
              </tr>
            </thead>
          
            <tbody>
              <tr>

                <td>04:00</td>
                <td>2</td>
                <td>3</td>
                <td>5</td>
                <td>5</td>
                <td>15</td>

              </tr>
              
              <tr>

                <td>06:00</td>
                <td>1</td>
                <td>2</td>
                <td>2</td>
                <td>5</td>
                <td>10</td>

              </tr>
              
              <tr>

                <td>07:00</td>
                <td>5</td>
                <td>5</td>
                <td>5</td>
                <td>5</td>
                <td>20</td>
              
              </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}