import bcrypt from 'bcrypt';
import { User } from '../models'

const saltRounds = 10;

export async function addUser(req, res) {
    const { name, email, password} = req.body;

    
    const passwordHash = bcrypt.hashSync(password, saltRounds)
    console.log(password, passwordHash);
    await User.create({
        name,
        email,
        password: passwordHash,
    })

    return res.status(201).send();
}
