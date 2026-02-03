import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { db } from "../config/db.js";
import { JWT_SECRET } from "../config/jwt.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  await db.query(
    "INSERT INTO users (name,email,password) VALUES (?,?,?)",
    [name, email, hash]
  );
  res.json({ message: "Registered successfully" });
}; 
export const login = async (req, res) => {
  const { email, password } = req.body;
  const [[user]] = await db.query(
    "SELECT * FROM users WHERE email=?",
    [email]
  );
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "7d" });
  res.json({ token });
};
