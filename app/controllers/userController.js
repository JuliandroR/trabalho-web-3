import bcrypt from "bcrypt";
import { User } from "../models/user";
import { makeResponse } from "../utils";
import { HttpError } from "../errors";

const saltRounds = 10;

export async function addUser(req, res, next) {
  try {
    const { name, email, password } = req.body;

    let user = await User.findOne({
      where: { email },
    });

    if (user) throw new HttpError(422, "Já existe uma usuário com esse e-mail");

    const passwordHash = bcrypt.hashSync(password, saltRounds);

    user = await User.create({
      name,
      email,
      password: passwordHash,
    });

    const result = {
      user_id: user.id,
    };

    return res.json(makeResponse(result));
  } catch (e) {
    next(e);
  }
}
