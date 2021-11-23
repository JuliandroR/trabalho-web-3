import bcrypt from 'bcrypt';
import { User } from '../models'
import { makeResponse } from '../utils'

const saltRounds = 10;

export async function addUser(req, res) {
    try {
        const { name, email, password} = req.body;

        const passwordHash = bcrypt.hashSync(password, saltRounds)

        const userId = await User.create({
            name,
            email,
            password: passwordHash,
        })

        result = {
            user_id: userId   
        }

        return res.json(makeResponse(result));
    } catch (e) {
        next(e)
    }
}
