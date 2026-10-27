const welcome = (name: string) => {
  return `Welcome ${name} to the MERN Stack Auth Service!`;
};

const user = {
  name: "Ranjan",
  email: "ranjan@example.com",
};

const user_name = user.name;
welcome(user_name);
welcome("Ranjan");
welcome("Rohit");
