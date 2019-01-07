import React, { Component } from 'react';
import { Pagination } from 'antd';
import './ScheduleGenerate.scss'
import Schedule from './Schedule';
import Overlaps from './Overlaps';
import Details from './Details';

class ScheduleGenerate extends Component {
    onChange(pageNumber) {
        console.log('Page: ', pageNumber);
    }

    render() {
        return (
            <div id='results'>
                <div id='paginador'>
                    <Pagination
                        showQuickJumper
                        defaultCurrent={1}
                        total={20}
                        defaultPageSize={1}
                        onChange={this.onChange}
                    />
                </div>
                <Schedule />
                <Overlaps />
                <Details />
            </div>
        );
    }
}

export default ScheduleGenerate;