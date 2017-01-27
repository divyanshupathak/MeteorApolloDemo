import React, { Component, PropTypes } from 'react';

export class MessageForm extends Component {
	constructor(props) {
		super(props);

		// bind event handlers to this
		this.submitMessage = this.submitMessage.bind(this);
		this.handleMessageChange = this.handleMessageChange.bind(this);

		// initialize component refs
		this.messageInput = null;

		// initialize the state
		this.state = {
			message: null
		};
	}
  render() {
		return (
			<div className="row">
				<form className="col-sm-12" onSubmit={this.submitMessage}>
					<div className="form-group">
						<input name="database" type="radio" id="mysql" value="mysql" />
						<label htmlFor="mysql"> &nbsp;MySQL</label>
					</div>
					<div className="form-group">
						<input name="database" type="radio" id="mongodb" value="mongodb" />
						<label htmlFor="mongodb"> &nbsp;MongoDB</label>
					</div>
					<div className="input-group">
						<input ref={(c) => this.messageInput = c} className="form-control" placeholder="Enter Your Post here." id="message" type="text" onChange={this.handleMessageChange} required />
						<span className="input-group-btn">
							<button type="submit" className="btn btn-default" title="Please click here.">
								<span className="glyphicon glyphicon-play"></span>
							</button>
						</span>
					</div>
				</form>
			</div>
		)
	}
	handleMessageChange(event) {
		this.setState({message: event.target.value})
	}
	submitMessage(event) {
		event.preventDefault()
		let databaseName = $("[name='database']:checked").val()
		if(databaseName == "mysql"){           
			this.props.MySQLsubmit(this.state.message);
			this.messageInput.value = "";
		}else if(databaseName == "mongodb"){           
			this.props.MongoDBsubmit(this.state.message);
			this.messageInput.value = "";
		}else{
			alert("Please select any one data source");
		}
	}
}
MessageForm.propTypes = {
	MySQLsubmit: PropTypes.func.isRequired,
	MongoDBsubmit: PropTypes.func.isRequired
};