import React, { Component } from 'react';
import DataInput from './DataInput';
import CoursesSelect from './CoursesSelect';

class Steps extends Component {
	constructor(props) {
		super(props);
	}

	showStep(index) {
		switch (index) {
			case 0:
				return <DataInput />
			case 1:
				return <CoursesSelect />
			case 2:
				return <DataInput />
			case 3:
				return <DataInput />
			default:
				return <div>Error</div>
		}
	}

	render() {
		return this.showStep(this.props.step || 0);
	}
}

export default Steps;