import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../../components/basic/button";
import SwitchAuthRoute from "../../components/basic/switchroute";
import TextField from "../../components/basic/textfield";
import validatePassword from "../../utils/validatePassword";
import matchPassword from "../../utils/matchPassword";
import findUser from "../../services/checkUser";
import createUser from "../../services/createUser";
import handleError from "../../utils/handleError";

export default function Signup() {
  const navigate = useNavigate();

  useEffect(() => {});

  // retreive the user inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");

  // handle responses
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  // toggle button disabled
  useEffect(() => {
    if (email !== "" && password !== "" && conPassword !== "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password, conPassword]);

  // retreive input values
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // check and set input state
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "con-password":
        setConPassword(value);
        break;
      default:
        break;
    }
  };

  //
  const handleForm = (e) => {
    e.preventDefault();

    setIsLoading(true);
    setIsDisabled(true);

    // password validation
    const validPassword = validatePassword(password);

    if (validPassword.isShort) {
      handleError(validPassword.message, setError, setIsDisabled, setIsLoading);
      return;
    }

    if (validPassword.isWeak) {
      handleError(validPassword.message, setError, setIsDisabled, setIsLoading);
      return;
    }

    const isMatch = matchPassword(password, conPassword);

    if (!isMatch) {
      handleError(
        "Passwords do not match",
        setError,
        setIsDisabled,
        setIsLoading
      );
      return;
    }

    // create account
    (async function () {
      const res = await findUser(email);
      console.log("res:", res);

      switch (res) {
        case "found user":
          handleError(
            "Email already exists",
            setError,
            setIsDisabled,
            setIsLoading
          );
          break;
        case "user not found":
          try {
            const userData = await createUser(email, password);
            if (userData) {
              localStorage.user = userData;

              // clear form inputs
              setEmail("");
              setPassword("");
              setConPassword("");

              navigate("/");
            }
          } catch (err) {
            handleError(
              "Failed to create user",
              setError,
              setIsDisabled,
              setIsLoading
            );
            console.error(err);
          }
          break;
        default:
          handleError("An error occurred");
          break;
      }
    })();

    setIsLoading(false);
    setIsDisabled(false);
  };

  return (
    <form
      onSubmit={handleForm}
      className="w-1/2 font-semibold flex flex-col gap-5"
    >
      <h1 className="text-2xl font-extrabold text-center">SIGN UP</h1>

      <TextField
        onChange={handleInputChange}
        value={email}
        name="email"
        label="Your email"
        type="email"
        placeholder="Enter your email"
      />

      <TextField
        onChange={handleInputChange}
        name="password"
        value={password}
        label="Password"
        type="password"
        placeholder="Enter your password"
      />

      <TextField
        onChange={handleInputChange}
        name="con-password"
        value={conPassword}
        label="Confirm Password"
        type="password"
        placeholder="Enter your password"
      />

      {isLoading ? (
        <Button text="loading..." />
      ) : (
        <Button isDisabled={isDisabled} text="SIGNUP" />
      )}
      {error && <p className="text-red-200">{error}</p>}

      <SwitchAuthRoute question="Already have an account?" link="signin" />
    </form>
  );
}
