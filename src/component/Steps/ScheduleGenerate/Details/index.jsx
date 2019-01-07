import React, { Component } from 'react';

class Details extends Component {
  paintDetails() {
    let result = []
    for (let index = 0; index < 7; index++) {
      result.push(
        <tr key={index}>
          <td>10</td>
          <td>W</td>
          <td>Planeamiento y Dirección Estratégica</td>
          <td>3</td>
          <td>Luisa Yance Mondragón</td>
        </tr>
      )
    }
    return result;
  }

  render() {
    return (
      <div className="schedule-table">
        <h2>Cruces</h2>
        <div className="schedule-table-flex">
          <table>
            <thead>
              <tr>
                <th>CICLO</th>
                <th>SECCIÓN</th>
                <th>CURSO</th>
                <th>CRED</th>
                <th>DOCENTE(S)</th>
              </tr>
            </thead>
            <tbody>
              {this.paintDetails()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Details;