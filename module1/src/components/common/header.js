"use strict";

var React = require('react');
var Router = require('react-router-dom');
var createReactClass = require('create-react-class');
var Link = Router.Link;

var Header = createReactClass({
	render: function(){
		return(
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<Link to='/' className="navbar-brand">
						<img src="images/pluralsight-logo.png" alt="Logo"/>
					</Link>
					<ul className='nav navbar-nav'>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/authors">Authors</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
					</ul>
				</div>
			</nav>
		)
	}
})

module.exports = Header;