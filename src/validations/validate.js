const validate = (data) => {
  const { name, email, password, phone, role } = data;
  if (name.length < 2) {
    throw new Error("Name is very small.");
  }
  if (role !== "student" && role !== "teacher") {
    throw new Error("Role is not defined");
  }
};
module.exports = validate;
