export default async function createUser(email, password) {
  try {
    const response = await fetch("http://localhost:3000/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: Math.floor(Math.random(0) * 1000).toString(),
        email,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error("failed to create user!");
    }

    const userData = await response.json();
    return userData;
  } catch (err) {
    console.log(err.message);
  }
}
