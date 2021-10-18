import { Collaborator, Photo, Responsible } from '../app/models'

export async function processData(req, res) {
    const data = req.body
    console.log(data);

    const photo = (req.file)? req.file.path : ''

    const { resp_name, resp_cpf } = data;
    const { title_photo, photographer } = data;
    const { name, cpf, email, phone, state, city, born_date } = data;

    try {

        let responsible_id = null
        if (resp_cpf) {
            let { id } = await Responsible.create({
                name: resp_name,
                cpf: resp_cpf
            })

            responsible_id = id
        }

        const {id:collaborator_id} = await Collaborator.create({
            name,
            cpf,
            email,
            phone,
            state,
            city,
            bornDate: born_date,
            responsible_id
        })

        const {id:photo_id} = await Photo.create({
            title: title_photo,
            img: photo,
            photographer,
            owner: collaborator_id,
        })

        if (photo_id) 
            res.status(201).json({ error: false })
        else
            res.status(500).json({ error: true, })   
    } catch (e) {
        console.error(e);
        res.status(422).json({ error: true, })
        connection.end()
    }
}


export async function getImages(req, res) {
    const results = await Photo.findAll({
        include: {
            model: Collaborator,
            as: 'collaborator',
            required: true,
            include: Responsible,
            attributes: {
                exclude: [
                    'responsible_id'
                ]
            }
          },
        attributes: {
            exclude: [
                'owner'
            ]
        },
        raw: true,
        nest: true
      }
    )
    
    const base = req.protocol + '://' + req.get('host') + '/uploads/'
    results.map(photo => {
        photo.img = new URL(base + photo.img.split('/')[1]).toString()
    })

    res.json(results)
}