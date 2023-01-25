const jwt = require("jsonwebtoken");
const AuthService = require("../services/auth.services");
require("dotenv").config(); 

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Cambiamos el nombre de result a response para no
    // ser redundante
    const response = await AuthService.login(email, password);
    // {isValid: true/false}
    if (response.isValid) {
      const data = {
        email: response.result.email,
        username: response.result.username,
        id: response.result.id,
      };
      const token = jwt.sign(data, process.env.JWT_SECRET, {
        algorithm: "HS512",
        expiresIn: "1m",
      });
      console.log(token);
      data.token = token;
      console.log(data);
      res.json(data);
    } else {
      res
        .status(401)
        .json({ message: "Credenciales incorrectos http.cat 401" });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  userLogin,
};
