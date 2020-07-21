import React from "react";

import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

it("renders without error", () => {
	const wrapper = shallow(<App />);
	const appComponent = wrapper.find("[data-test='component-app']");

	expect(appComponent.length).toBe(1);
});

// it("renders increment button", () => {
// 	const wrapper = shallow(<App />);
// 	const buttonEle = wrapper.find("[data-test='button']");

// 	expect(buttonEle.length).toBe(1);
// });

// it("renders counter display", () => {});

// it("begins with the counter at 0", () => {});

// it("clicking button increments counter display by one", () => {});
