import React from "react";
import { render } from "@testing-library/react";
import { AuthContext, AuthProvider } from "./AuthContext";

describe("login test (AuthContext)", () => {
  it("sets isLoggedIn status to true", () => {
    const TestComponent = () => {
      const { login, isLoggedIn } = React.useContext(AuthContext);

      return (
        <>
          <p data-testid="value">{isLoggedIn.toString()}</p>
          <button data-testid="loginBtn" onClick={login}>Login</button>
        </>
      );
    };

    const { container, unmount } = render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    const divBeforeClick = container.querySelector("p[data-testid='value']");
    if (divBeforeClick !== null)
      expect(divBeforeClick.textContent).toEqual("false");

    const button = container.querySelector("button");
    if (button !== null) button.click();

    const divAfterClick = container.querySelector("p[data-testid='value']");
    if (divAfterClick !== null)
      expect(divAfterClick.textContent).toEqual("true");

    unmount();
  });
});
