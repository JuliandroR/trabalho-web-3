import { User } from "../models/user";
import { HttpError } from "../errors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { makeResponse } from "../utils";

const tokenValidity = 86400;

export async function autenticate(req, res, next) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      where: { email },
    });

    if (!email || !password) {
      throw new HttpError(400, "Usuário ou senha não informados");
    }

    if (!user || !bcrypt.compareSync(password, user.password)) {
      throw new HttpError(401, "Usuário ou senha incorretos");
    }

    const token = jwt.sign({ userId: user.id }, process.env.SECRET || 'default', {
      expiresIn: tokenValidity,
    });

    if (!token) {
      throw new HttpError(500, "Erro desconhecido ao gerar o token de acesso");
    }

    const { exp } = jwt.decode(token);
    const result = {
      token,
      valid_until: exp,
    };

    return res.json(makeResponse(result));
  } catch (e) {
    next(e);
  }
}
