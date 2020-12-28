import 'amis/lib/themes/default.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render as renderAmis } from 'amis';

class App extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const schema = {
			type: 'page',
			"body": {
				"type": "form",
				"controls": [
					{
						"type": "number",
						"name": "A-1",
						"label": "A"
					},
					{
						"type": "number",
						"name": "B-1",
						"label": "B"
					},
					{
						"type": "number",
						"name": "sum",
						"label": "和",
						"disabled": true,
						"description": "自动计算 A + B"
					},
					{
						"type": "formula",
						"name": "sum",
						"formula": `(function(data) {
							var result = this['A-1'] + this['B-1'];
							if (isFinite(result)) return result;
							return null;
						}.bind(this))(data);`
					}
				]
			}
		};

		// return (<h1>Hello, world!</h1>);
		return renderAmis(schema);
	}
}

ReactDOM.render(
	<App></App>,
	document.getElementById('root')
);