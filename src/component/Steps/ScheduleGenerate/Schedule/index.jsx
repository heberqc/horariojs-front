import React, { Component } from 'react';
import './Schedule.scss';

class Schedule extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      objSchedule: {
        index: 1,
      }
    }
  }

  paintHours() {
    let horario = []
    for (let index = 0; index < 7; index++) {
      horario.push(
        <tr key={index}>
          <td>{index}0</td>
          <td>{index}1</td>
          <td>{index}2</td>
          <td>{index}3</td>
          <td>{index}4</td>
          <td>{index}5</td>
          <td>{index}6</td>
        </tr>
      )
    }
    return horario
  }

  render() {
    return (
      <div className="schedule-table">
        <h1>Horario #{this.state.objSchedule.index}</h1>
        <div className="schedule-table-flex">
          <table>
            <thead>
              <tr>
                <th>HORA</th>
                <th>LU</th>
                <th>MA</th>
                <th>MI</th>
                <th>JU</th>
                <th>VI</th>
                <th>SÁ</th>
              </tr>
            </thead>
            <tbody>
              {this.paintHours()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Schedule;