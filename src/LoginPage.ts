import { config } from "./config";
import { setURL } from "./HistoryUtils";
import { setStyle } from "./setStyle";

export const LoginPage = () => {
  const el = document.createElement("div");
  setStyle(el, {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "800px",
    width: "100%",
    margin: "0 auto"
  })

  const emailInput = document.createElement("input");
  setStyle(emailInput, {
    width: "100%",
    margin: "4px 0"
  })
  emailInput.placeholder = "Email";
  emailInput.type = "email";
  el.append(emailInput);

  const passwordInput = document.createElement("input");
  setStyle(passwordInput, {
    width: "100%",
    margin: "4px 0"
  })
  passwordInput.placeholder = "Password";
  passwordInput.type = "password";
  el.append(passwordInput);

  const loginButton = document.createElement("button");
  setStyle(loginButton, {
    margin: "4px 0"
  })
  loginButton.innerText = "Login";

  loginButton.addEventListener("click", async () => {
    const response = await fetch(`${config.baseUrl}/u/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInput.value,
        password: passwordInput.value
      }),
      credentials: "include"
    })
  })
  el.append(loginButton)

  const signupDescription = document.createElement("div");
  signupDescription.innerText = "Already have an account?"
  el.append(signupDescription)

  const signupLink = document.createElement("a");
  setStyle(signupLink, {
    marginLeft: "4px"
  })
  signupLink.href = "/u/signup";
  signupLink.innerText = "Sign Up"
  signupLink.addEventListener("click", (e) => {
    e.preventDefault();
    setURL(signupLink.href)
  })
  signupDescription.append(signupLink);

  return el;
}