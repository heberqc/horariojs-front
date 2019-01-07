import React, { Component } from 'react';
import {
	Form, Tooltip, Icon, Select, Button,
} from 'antd';

const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
	children.push(
		<Option key={i.toString(36) + i}>{i.toString(36) + i} Estadistica</Option>
	);
}

class DataInput extends Component {
	state = {
		confirmDirty: false,
		autoCompleteResult: [],
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	}

	handleChange(value) {
		console.log(`selected ${value}`);
	}

	render() {
		const { getFieldDecorator } = this.props.form;

		// inputs y labels
		const formItemLayout = {
			labelCol: {
				xs: { span: 24 },
				sm: { span: 6 },
				md: { span: 8 },
			},
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 14 },
				md: { span: 12 },
			},
		};

		// para el botón
		const tailFormItemLayout = {
			wrapperCol: {
				xs: {
					span: 24,
					offset: 0,
				},
				sm: {
					span: 16,
					offset: 8,
				},
			},
		};

		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Item
					{...formItemLayout}
					label="Carrera"
				>
					{getFieldDecorator('carrera', {
						rules: [{
							required: true, message: 'Debes escoger una carrera',
						}],
					})(
						<Select
							showSearch
							placeholder="Select a person"
							optionFilterProp="children"
							onChange={this.handleChange}
							// onFocus={handleFocus}
							// onBlur={handleBlur}
							filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
						>
							<Option value="jack">Jack</Option>
							<Option value="lucy">Lucy</Option>
							<Option value="tom">Tom</Option>
						</Select>,
					)}
				</Form.Item>
				<Form.Item
					{...formItemLayout}
					label={(
						<span>
							Nickname&nbsp;
							<Tooltip title="Agrega los cursos que te gustaría llevar">
								<Icon type="question-circle-o" />
							</Tooltip>
						</span>
					)}
				>
					{getFieldDecorator('cursos', {
						rules: [{ required: true, message: 'Ingresa los cursos que deseas llevar' }],
					})(
						<Select
							mode="multiple"
							style={{ width: '100%' }}
							placeholder="Please select"
							// defaultValue={['a10', 'c12']}
							onChange={this.handleChange}
						>
							{children}
						</Select>
					)}
				</Form.Item>
				<Form.Item {...tailFormItemLayout}>
					<Button type="primary" htmlType="submit">Continuar</Button>
				</Form.Item>
			</Form>
		);
	}
}

export default Form.create()(DataInput);