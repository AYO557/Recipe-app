export default function validatePassword(password) {
  const strongPassword = {
    isShort: false,
    isWeak: false,
    message: "strong",
  };

  // validate passwords
  if (password.length < 8) {
    strongPassword.isShort = true;
    strongPassword.message = "Password must be at least 8 characters long";

    return strongPassword;
    // setTimeout(() => {
    //   setError(null);
    // }, 2000);
    // return;
  }

  // check strong password: include uppercase letters, iclude numbers and symbols
  if (password.toLowerCase() === password) {
    strongPassword.isWeak = true;
    strongPassword.message =
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";

    return strongPassword;
    // setTimeout(() => {
    //   setError(null);
    // }, 2000);
    // return;
  }

  return strongPassword;
}
