'use strict'

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authApi');
var ActionTypes = require('../constants/actionTypes');

var InitializeActions = {
	initApp : function(){
		Dispatcher.dispatch({
			actionType: ActionTypes.INITIALIZE,
			initialData: {
				authors: AuthorApi.getAllAuthors().authors
			}
		})
	}
}


module.exports = InitializeActions;