const welcome = (name: string) => {
  console.log(`welcome, ${name}`);
};

const user = {
  name: "Ranjan",

  email: "ranjan@example.com",
};

const email = user.email;
const user_name = user.name;
console.log(email);
console.log(user_name);

welcome("Ranjan");
welcome("Rohit");
