import React from "react";
import { /* prettyDOM, */ fireEvent, render } from "@testing-library/react";
import { AuthContext, AuthProvider } from "./AuthContext";

describe("login & logout test (AuthContext)", () => {
  it("sets isLoggedIn status to true and then to false", () => {
    const TestComponent = () => {
      const { login, logout, isLoggedIn } = React.useContext(AuthContext);

      return (
        <>
          <p data-testid="value">{isLoggedIn.toString()}</p>
          <button data-testid="loginBtn" onClick={login}>
            Login
          </button>
          <button data-testid="logoutBtn" onClick={logout}>
            Logout
          </button>
        </>
      );
    };

    const container = render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    // getting state of login
    const div = container.getByTestId("value");
    if (div !== null) expect(div.textContent).toEqual("false");

    // simulating login
    const loginBtn = container.getByText("Login");
    fireEvent.click(loginBtn)

    if (div !== null) expect(div.textContent).toEqual("true");

    // simulating logout
    const logoutBtn = container.getByText("Logout");
    fireEvent.click(logoutBtn)

    expect(div.textContent).toEqual("false");

    // console.log(prettyDOM(div)); to display the DOM in the console

    const { unmount } = container;
    unmount();
  });
});
