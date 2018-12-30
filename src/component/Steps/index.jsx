import React, { Component } from 'react';
import DataInput from './DataInput';
import CoursesSelect from './CoursesSelect';
import ScheduleGenerate from './ScheduleGenerate';
import ScheduleFilter from './ScheduleFilter';

class Steps extends Component {
	constructor(props, context) {
		super(props, context);
		
	}
	
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
		return this.showStep(this.props.step || 0);
	}
}

export default Steps;