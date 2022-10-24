import { config } from "./config";
import { setURL } from "./HistoryUtils";
import { setStyle } from "./setStyle";

export const SignupPage = () => {
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

  const signUpButton = document.createElement("button");
  setStyle(signUpButton, {
    margin: "4px 0"
  })
  signUpButton.innerText = "Sign Up";

  signUpButton.addEventListener("click", async () => {
    const response = await fetch(`${config.baseUrl}/u/signup`, {
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
    alert(await response.json())
  })
  el.append(signUpButton)

  const loginDescription = document.createElement("div");
  loginDescription.innerText = "Already have an account?"
  el.append(loginDescription)

  const loginLink = document.createElement("a");
  setStyle(loginLink, {
    marginLeft: "4px"
  })
  loginLink.href = "/u/login";
  loginLink.innerText = "Login"
  loginLink.addEventListener("click", (e) => {
    e.preventDefault();
    setURL(loginLink.href)
  })
  loginDescription.append(loginLink);
  

  return el;
}