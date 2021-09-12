
import connection from './pool'

export async function processData(req, res) {
    const data = req.body

    const photo = req.file.path

    const { resp_name, resp_cpf } = data;
    const { photo_title, photographer } = data;
    const { name, cpf, email, phone, state, city, born_date } = data;

    try {
        const { rows: [{id: responsible_id}]} = await connection.query(
            'INSERT INTO responsible (name, cpf) VALUES ($1, $2) RETURNING id',
            [resp_name, resp_cpf]
        )

        connection.query('INSERT INTO collaborator (name, cpf, email, phone, state, city, born_date, responsible_id) \
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id',
            [name, cpf, email, phone, state, city, born_date, responsible_id])
            .then(async ({ rows: [{id: collaborator_id}]}) => {
                console.log(collaborator_id);
                await connection.query(
                    'INSERT INTO photo (title, img, photographer, owner) VALUES ($1, $2, $3, $4)',
                    [photo_title, photo, photographer, collaborator_id]
                )

                res.status(201).json({ error: false })
            }).catch(err => res.status(422).json({ error: true, }))

    } catch (e) {
        console.error(e);
        res.status(422).json({ error: true, })
        connection.end()
    }
}
