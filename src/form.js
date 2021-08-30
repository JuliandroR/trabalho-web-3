
import connection from './pool'

export async function processData(req, res) {
    const data = req.body

    const { resp_name, resp_cpf } = data;
    const { photo, photo_title, photographer } = data;
    const { name, cpf, email, phone, state, city, born_date } = data;

    try {
        const { id: responsible_id } = await connection.query(
            'INSERT INTO responsible (name, cpf) VALUES ($1, $2)',
            [resp_name, resp_cpf]
        )

        connection.query('INSERT INTO collaborator (name, cpf, email, phone, state, city, born_date, responsible_id) \
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
            [name, cpf, email, phone, state, city, born_date, responsible_id])
            .then(() => {
                res.status(201).json({ error: false })
            }).catch(err => res.status(422).json({ error: true, }))

    } catch (e) {
        res.status(422).json({ error: true, })
        connection.end()
    }
}
