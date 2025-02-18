export default async function findUser(email, password) {
  try {
    const promise = await fetch("http://localhost:3000/auth");

    if (!promise.ok) {
      throw new Error(promise.message);
    }

    const users = await promise.json();

    const foundUser = users.find((user) => {
      return user.email === email;
    });

    if (foundUser) {
      if (password) {
        if (foundUser.password === password) {
          return "valid password";
        }
        return "invalid password";
      }
      return "found user";
    }

    if (!foundUser) {
      return "user not found";
    }
  } catch (err) {
    return err.message;
  }
}
