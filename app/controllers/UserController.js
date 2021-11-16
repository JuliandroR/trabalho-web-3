import bcrypt from 'bcrypt';
import { Collaborator } from '../models'

const saltRounds = 10;

export async function addUser(req, res) {
    const { name, cpf, email, phone, state, city, born_date, password} = req.body;

    
    const passwordHash = bcrypt.hashSync(password, saltRounds)
    console.log(password, passwordHash);
    await Collaborator.create({
        name,
        cpf,
        email,
        phone,
        state,
        city,
        password: passwordHash,
        bornDate: born_date
    })

    return res.status(201).send();
}
