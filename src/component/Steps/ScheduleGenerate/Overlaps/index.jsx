import React, { Component } from 'react';

class Overlaps extends Component {
  paintOverlaps() {
    let result = []
    let rowCount = 0
    for (let index = 0; index < 3; index++) {
      const span = 2
      result.push(
        <tr key={rowCount++}>
          <td rowSpan={span}>1 horas</td>
          <td>T</td>
          <td>Planeamiento y Dirección Estratégica</td>
        </tr>,
        <tr key={rowCount++}>
          <td>T</td>
          <td>Análisis de Manufactura</td>
        </tr>
      )
    }
    return result
  }
  
  render() {
    return (
      <div className="schedule-table">
        <h2>Cruces</h2>
        <div className="schedule-table-flex">
          <table>
            <thead>
              <tr>
                <th>CRUCE</th>
                <th>TIPO</th>
                <th>CURSOS/SECCIÓN</th>
              </tr>
            </thead>
            <tbody>
              {this.paintOverlaps()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Overlaps;