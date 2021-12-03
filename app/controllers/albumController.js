import { Collaborator } from "../models/collaborator";
import { Photo } from "../models/photo";
import { Responsible } from "../models/responsible";

export async function processData(req, res, next) {
  const data = req.body;
  const photo = req.file ? req.file.filename : "";

  const { resp_name, resp_cpf } = data;
  const { title_photo, photographer } = data;
  const { name, cpf, email, phone, state, city, born_date } = data;

  try {
    let responsible_id = null;
    if (resp_cpf) {
      let responsible_id = await Responsible.findOne({
        where: { cpf: resp_cpf },
        attributes: ['id']
      });

      if (!responsible_id)
        responsible_id  = await Responsible.create({
          name: resp_name,
          cpf: resp_cpf,
        }).id;
    }

    let collaborator_id = await Collaborator.findOne({
      where: { cpf },
      attributes: ['id']
    });

    if (!responsible_id)
      collaborator_id = await Collaborator.create({
        name,
        cpf,
        email,
        phone,
        state,
        city,
        bornDate: born_date,
        responsible_id,
      }).id;

      console.log(2, collaborator_id);
    await Photo.create({
      title: title_photo,
      img: photo,
      photographer,
      owner: collaborator_id,
    });

    res.status(201).json({ error: false });
  } catch (e) {
    next(e);
  }
}

export async function getImages(req, res, next) {
  try {
    const results = await Photo.findAll({
      include: {
        model: Collaborator,
        as: "collaborator",
        required: true,
        include: Responsible,
        attributes: {
          exclude: ["responsible_id"],
        },
      },
      attributes: {
        exclude: ["owner"],
      },
      raw: true,
      nest: true,
    });

    const base = req.protocol + "://" + req.get("host") + "/uploads/";
    results.map((photo) => {
      photo.img = new URL(base + photo.img).toString();
    });

    res.json(results);
  } catch (e) {
    next(e);
  }
}
