import React from "react";

import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @param {object} props = component props specific to this setup
 * @param {any} state = initial state for setup
 * @returns {ShallowWrapper}
 */

const setup = (props = {}, state = null) => {
	const wrapper = shallow(<App {...props} />);
	if (state) wrapper.setState(state);
	return wrapper;
};

/**
 * Return ShallowWrapper container node(s) with the given data-test value
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper - Enzyme wrapper to search within
 * @param {string} val - Value of data-test attribute to search
 * @returns {ShallowWrapper}
 */

const findByTestAttr = (wrapper, val) => {
	return wrapper.find(`[data-test="${val}"]`);
};

// Tests

it("renders without error", () => {
	const wrapper = setup();
	const appComponent = findByTestAttr(wrapper, "component-app");

	expect(appComponent.length).toBe(1);
});

it("renders increment button", () => {
	const wrapper = setup();
	const button = findByTestAttr(wrapper, "button");

	expect(button.length).toBe(1);
});

it("renders counter display", () => {
	const wrapper = setup();
	const counter = findByTestAttr(wrapper, "counter-display");

	expect(counter.length).toBe(1);
});

it("initializes state with the counter at 0", () => {
	const wrapper = setup();
	const initialCounterState = wrapper.state("counter");

	expect(initialCounterState).toBe(0);
});

it("clicking button increments counter display by one", () => {
	const counter = 7;
	const wrapper = setup(null, { counter });

	// finds button, simulates clicking it
	const button = findByTestAttr(wrapper, "button");
	button.simulate("click");

	// find and display test value
	const counterDisplay = findByTestAttr(wrapper, "counter-display");
	expect(counterDisplay.text()).toContain(counter + 1);
});
