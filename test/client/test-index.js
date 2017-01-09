const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const chai = require('chai');
const WelcomePage = require ('../client/js/components');

const should = chai.should();
let result;

describe('Home page', function () {

	beforeEach(() => {
		const renderer = TestUtils.createRenderer();
		renderer.render(<WelcomePage />);
		result = renderer.getRenderOutput();
	});

	it.only('Renders and returns Welcome Page', function() {
		console.log(results.props);
		const { ... } = result.props;
	});
});
