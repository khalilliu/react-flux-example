"use strict"

var React = require('react');
var createReactClass = require('create-react-class');
var Link = require('react-router-dom');

var NotFoundPage = createReactClass({
	render: function() {
		return(
		<div>
			<h1>Page Not Found</h1>
			<p>Whoops! Sorry, there is nothing to see the page.</p>
			<p>
				<Link to='/'>back to home</Link>
			</p>
		</div>
		)
	}
})