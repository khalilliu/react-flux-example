'use strict'

var React = require('react');
var PropsTypes = require('prop-types');
var createReactClass = require('create-react-class');
var Link = require('react-router-dom').Link;
var AuthorActions = require('../../actions/authorActions');
var toastr = require('toastr');

var AuthorList = createReactClass({


	deleteAuthor: function(id,ev){
		ev.preventDefault();
		AuthorActions.deleteAuthor(id);
		toastr.success("Author Deleted");
	},

	render: function(){
		var createAuthorRow = function(author,i){
			return(
				<tr key={i}>
					<td><a href='#' onClick={this.deleteAuthor.bind(this,author.id)}>Deleted</a></td>
					<td><Link to={ "author/" + author.id }>{author.id}</Link></td>
					<td>{author.firstName} {author.lastName}</td>
				</tr>
			)
		}
		return(
			<div>
				<table className='table'>
					<thead>
						<tr>
						<th>Action</th>
						<th>ID</th>
						<th>Name</th>
						</tr>
					</thead>
					<tbody>
						{this.props.authors.map(createAuthorRow,this)}
					</tbody>
				</table>
			</div>
		)

	}
})


module.exports = AuthorList;