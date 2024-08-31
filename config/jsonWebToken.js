import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, "kathmandu", { expiresIn: "30d" });
};

export default generateToken;
