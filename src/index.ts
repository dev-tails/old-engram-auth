import { LoginPage } from "./LoginPage";
import { SignupPage } from "./SignupPage";

const root = document.createElement("div");
document.body.append(root);

window.addEventListener("popstate", handleRouteUpdated);

function handleRouteUpdated() {
  root.innerHTML = "";
  const pathname = window.location.pathname;

  if (pathname === "/u/signup" || pathname === "/") {
    root.append(SignupPage());
  } else if (pathname === "/u/login") {
    root.append(LoginPage());
  }
}

handleRouteUpdated();
