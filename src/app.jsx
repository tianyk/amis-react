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
			"type": "page",
			"body": {
				"type": "form",
				"api": "https://houtai.baidu.com/api/mock2/form/saveForm",
				"controls": [
					{
						"type": "text",
						"label": "常规",
						"name": "text",
						"required": true
					}
				]
			}
		};

		return renderAmis(schema);
	}
}

ReactDOM.render(
	<App></App>,
	document.getElementById('root')
);