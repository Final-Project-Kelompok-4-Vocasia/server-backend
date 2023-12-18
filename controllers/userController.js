const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

class Controller {
  static async registerUser(req, res) {
    const body = req.body;
    const { username, email, password, nama, noTelepon, alamat } = body;

    try {
      const newUser = await User.create({
        username,
        email,
        password,
        nama,
        noTelepon,
        alamat,
      });

      res.status(201).json({ message: "Akun berhasil dibuat, silahkan login!", newUser });
    } catch (error) {
      console.log(`Error menambahkan User: ${error}`);
      res.status(500).json(error);
    }
  }

  static async loginUser(req, res) {
    const body = req.body;
    const { email, password } = body;
    const secret = "cafee-web";

    try {
      const loginUser = await User.findOne({
        where: {
          email,
        },
      });

      if (!loginUser) {
        //Jika email yang diinput salah atau tidak valid
        return res.status(403).json("Salah Email/Password!");
      }

      //Jika email ada, lanjut membandingkan inputan dengan password yang telah dihash
      const validation = bcrypt.compareSync(password, loginUser.password);

      if (validation) {
        //Mengubah id dan email menjadi JWT Token
        const token = jwt.sign(
          {
            id: loginUser.id,
            email: loginUser.email,
          },
          secret
        );

        //Jika password dan email VALID
        res.status(200).json({ message: "Berhasil login!", token });
      } else {
        //Jika password yang diinput salah atau tidak valid
        return res.status(403).json("Salah Email/Password!");
      }
    } catch (error) {
      console.error(`Error:`, error);
      res.status(500).json(error);
    }
  }
}

module.exports = Controller;
