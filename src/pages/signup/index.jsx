import { useState } from "react";
import Button from "../../components/basic/button";
import SwitchAuthRoute from "../../components/basic/switchroute";
import TextField from "../../components/basic/textfield";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();

    // generate random user id
    const userId = Math.floor(Math.random(0) * 1000000).toString();
    console.log(userId);

    const logindata = {
      userId,
      email,
      password,
    };

    // fetching api
    async function createUser() {
      setIsLoading(true);

      const response = await fetch("http://localhost:3000/aut", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(logindata),
      });
      console.log(response);

      if (!response || response.status !== 201) {
        setIsLoading(false);
        setError("failed to create account");
        setTimeout(() => {
          setError(null);
        }, 1000);
      }

      const userData = await response.json();
      setUser(userData);
    }

    createUser();
    setEmail("");
    setPassword("");
    setConPassword("");
  };

  return (
    <form
      onSubmit={handleForm}
      className="w-1/2 font-semibold flex flex-col gap-5"
    >
      <h1 className="text-2xl font-extrabold text-center">SIGN UP</h1>

      <TextField
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        label="Your email"
        type="email"
        placeholder="Enter your email"
      />

      <TextField
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        label="Password"
        type="password"
        placeholder="Enter your password"
      />

      <TextField
        onChange={(e) => setConPassword(e.target.value)}
        value={conPassword}
        label="Confirm Password"
        type="password"
        placeholder="Enter your password"
      />

      {isLoading ? <Button text="loading..." /> : <Button text="SIGNUP" />}
      {error && <p className="text-red-200">{error}</p>}

      <SwitchAuthRoute question="Already have an account?" link="signin" />
    </form>
  );
}
