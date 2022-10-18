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

  const signUpButton = document.createElement("button");
  setStyle(signUpButton, {
    margin: "4px 0"
  })
  signUpButton.innerText = "Login";

  signUpButton.addEventListener("click", () => {
    alert("TODO: Implement POST api.engramhq.xyz/user/login")
  })
  el.append(signUpButton)

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