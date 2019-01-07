import React, { Component } from 'react';
import DataInput from './DataInput';
import CoursesSelect from './CoursesSelect';
import ScheduleGenerate from './ScheduleGenerate';
import ScheduleFilter from './ScheduleFilter';

class Steps extends Component {
	showStep(index) {
		switch (index) {
			case 0:
				return <DataInput />
			case 1:
				return <CoursesSelect />
			case 2:
				return <ScheduleGenerate />
			case 3:
				return <ScheduleFilter />
			default:
				return <div>Error</div>
		}
	}

	render() {
		return (
			<div style={{ borderRadius: 2, border: '1px solid #ebedf0', backgroundColor: '#fff', padding: 8 }}>
				{this.showStep(this.props.step || 2)}
			</div>
		)
	}
}

export default Steps;