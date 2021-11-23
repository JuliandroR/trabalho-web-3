import bcrypt from 'bcrypt';
import { User } from '../models'
import { makeResponse } from '../utils'

const saltRounds = 10;

export async function addUser(req, res, next) {
    try {
        const { name, email, password} = req.body;

        const passwordHash = bcrypt.hashSync(password, saltRounds)

        const user = await User.create({
            name,
            email,
            password: passwordHash,
        })

        const result = {
            user_id: user.id  
        }

        return res.json(makeResponse(result));
    } catch (e) {
        next(e)
    }
}
