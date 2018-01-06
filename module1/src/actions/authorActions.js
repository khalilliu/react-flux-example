'use strict'

var appDispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
	createAuthor: function(author){
		var newAuthor = AuthorApi.saveAuthor(author);

		appDispatcher.dispatch({
			actionType: ActionTypes.CREATE_AUTHOR,
			author: newAuthor
		})
	},

	updateAuthor: function(author){
		var updateAuthor = AuthorApi.saveAuthor(author);

		appDispatcher.dispatch({
			actionType: ActionTypes.UPDATE_AUTHOR,
			author: updateAuthor
		})
	},

	deleteAuthor: function(id){
		AuthorApi.deleteAuthor(id);

		appDispatcher.dispatch({
			actionType: ActionTypes.DELETE_AUTHOR,
			id: id
		})
	}
}

module.exports = AuthorActions;