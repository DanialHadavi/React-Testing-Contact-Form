import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
//import { exportAllDeclaration } from "@babel/types";

test("renders App without crashing", () => {
  render(<App />);
});

test("testing first name", () => {
  const { getByText } = render(<App />);
  const firstName = getByText(/first name/i);
  expect(firstName).toBeInTheDocument();
});

test("testing last name", () => {
  const { getByText } = render(<App />);
  const LastName = getByText(/last name/i);
  expect(LastName).toBeInTheDocument();
});

test("testing email", () => {
  const { getByText } = render(<App />);
  const email = getByText(/email/i);
  expect(email).toBeInTheDocument();
});

test("testing Message", () => {
  const { getByText } = render(<App />);
  const message = getByText(/message/i);
  expect(message).toBeInTheDocument();
});
