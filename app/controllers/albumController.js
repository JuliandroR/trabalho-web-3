import { Collaborator } from "../models/collaborator";
import { Photo } from "../models/photo";
import { Responsible } from "../models/responsible";
import { Op } from 'sequelize';

export async function processData(req, res, next) {
  const data = req.body;
  const photo = req.file ? req.file.filename : "";

  const { resp_name, resp_cpf } = data;
  const { title_photo, photographer } = data;
  const { name, cpf, email, phone, state, city, born_date } = data;
  
  const colaborator_data = {
    name,
    cpf,
    email,
    phone,
    state,
    city,
    bornDate: born_date
  }

  try {
    let responsible = null;
    if (resp_cpf) {
      let responsible = await Responsible.findOne({
        where: { cpf: resp_cpf },
        attributes: ['id']
      });

      if (!responsible)
        responsible  = await Responsible.create({
          name: resp_name,
          cpf: resp_cpf,
        });

      colaborator_data['responsible_id'] = responsible.id
    }

    let collaborator = await Collaborator.findOne({
      where: { cpf },
      attributes: ['id']
    });

    if (!collaborator)
      collaborator = await Collaborator.create(colaborator_data);

    await Photo.create({
      title: title_photo,
      img: photo,
      photographer,
      owner: collaborator.id,
    });

    res.status(201).json({ error: false });
  } catch (e) {
    next(e);
  }
}

export async function getImages(req, res, next) {
  const {data:date, cidade:city} = req.query;

  const filter = {}
  if (date)
    filter.bornDate = {
      [Op.gte]: new Date(date),
      [Op.lte]: new Date(date) - 1 + 60 * 60 * 24 * 1000
    }

  if (city)
    filter.city = {
      [Op.like]: `%${city}%`
    }

  try {
    const results = await Photo.findAll({
      include: {
        model: Collaborator,
        as: "collaborator",
        where: filter,
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
