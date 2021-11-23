import { User } from "../models"
import { HttpError } from '../errors'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { makeResponse } from '../utils'

const tokenValidity = 86400;
const saltRounds = 10;

export async function autenticate(req, res, next) {
    const { email, password } = req.body

    try {
        const user = await User.findOne({
            where: { email }
        })

        if (!email || !password) {
            throw new HttpError(400, 'Usuário ou senha não informados');
        }

        if (!user || !bcrypt.compareSync(password, user.password)) {
            throw new HttpError(401, 'Usuário ou senha incorretos');
        }

        const token = jwt.sign({ userId: user.id },
            'process.env.SECRET',
            {
                expiresIn: tokenValidity
            }
        );

        if (!token) {
            throw new HttpError(500, 'Erro desconhecido ao gerar o token de acesso');
        }

        const result = {
            token,
            expires_in: tokenValidity
        }

        return res.json(makeResponse(result));
    } catch (e) {
        next(e)
    }
}

// app.post('/logout', function (req, res) {
//     res.json({ auth: false, token: null });
// })