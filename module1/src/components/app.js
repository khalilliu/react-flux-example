
var React = require('react');
var Header = require('./common/header');
var ReactRouter = require('react-router-dom');
$ = jQuery = require('jquery');
var createReactClass = require('create-react-class');

var HomePage = require('./homePage');
var AuthorPage = require('./authors/authorPage');
var ManageAuthorPage = require('./authors/manageAuthorPage');
var AboutPage = require('./about/aboutPage');
var NotFoundPage = require('./notFoundPage');

var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Redirect = ReactRouter.Redirect;

var App = createReactClass({
	render: function(){
		return(
			<div>
				<Header />
				<div className="container-fluid">
					<Switch>
						<Redirect from="/awthurs"  to="/authors" />
						<Redirect from='/about-us' to="/about" />

						<Route exact path='/' component={HomePage} />
						<Route path='/authors' component={AuthorPage} />
						<Route exact path='/author'  component={ManageAuthorPage} />
						<Route path='/author/:id' component={ManageAuthorPage} />
						<Route path='/about' component={AboutPage} />
						<Route component={NotFoundPage} />
					</Switch>
				</div>		
			</div>
		)
	}

})

module.exports = App;