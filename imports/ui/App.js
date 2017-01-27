/**
* The top level react component
*/

import React, { Component } from 'react';
import PostsContainer from './postsContainer'
import MessageFormContainer from './messageFormContainer'

export default class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="row">
				<div className="col-sm-4">
					<h4>MySQL Data</h4>
					<PostsContainer source="mysql" />
				</div>

				<div className="col-sm-4">
					<h4>Select Database</h4>
					<MessageFormContainer />
				</div>

				<div className="col-sm-4">
					<h4>MongoDB Data</h4>
					<PostsContainer source="mongodb" />
				</div>
			</div>
		)
	}
}