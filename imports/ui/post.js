import React, { Component, PropTypes } from 'react';

export default class Post extends Component {
	constructor(props) {
		super(props);

		this.removeMessage = this.removeMessage.bind(this);
		/*this.updateMessage = this.updateMessage.bind(this);*/
	}
	render() {
		// console.log("Post props >>>>>>", this.props)
		return (
			<tr>
				<td>{this.props.source == 'mysql' ? this.props.post.id : this.props.post._id}</td>
				<td>{this.props.post.content}</td>
				{/*<td>
				<button type="button" id="edit" onClick={this.updateMessage}><span className="glyphicon glyphicon-pencil"></span></button>
				</td>*/}
				<td>
					<button type="button" onClick={this.removeMessage} id="delete"><span className="glyphicon glyphicon-remove-sign"></span></button>
				</td>
			</tr>
		)
	}

	/*updateMessage(ev){
		ev.preventDefault();
		console.log("Update function called")
		this.props.editPost(this.props.post.content);
	}*/

	removeMessage(event) {
		event.preventDefault();
		console.log("Remove function called")
		// console.log("Data source >>>>", this.props.source, "id >>>", this.props.post.id ? this.props.post.id : '', this.props.post._id ? this.props.post._id : '');

		console.log("Post props >>>>>>", this.props)

		if(this.props.source == 'mysql') {
			console.log("source >>>>", this.props.source, "id >>", this.props.post.id)
			this.props.deleteSqlPost(this.props.post.id)
		}else{
			console.log("source >>>>", this.props.source, "id >>", this.props.post._id)
			this.props.deleteMongoDbPost(this.props.post._id)
		}
	}
}

// Post requires props with a post attribute with a content attribute of type string
Post.propTypes = {
	post: PropTypes.shape({
		content: PropTypes.string
	}).isRequired,
	deleteMongoDbPost: PropTypes.func.isRequired,
	deleteSqlPost: PropTypes.func.isRequired
};