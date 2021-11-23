import jwt from 'jsonwebtoken'
import { HttpError } from '../errors'

export async function protect(req, res, next) {
  try {
    const header = req.headers['authorization']

    if (!header)
      throw new HttpError(401, 'O header Authorization não foi informado.');

    const token = header.split(' ')[1];

    if (!token)
      throw new HttpError(401, 'O token de acesso não foi informado.');

    jwt.verify(token, 'process.env.SECRET', (err, decoded) => {
      if (err)
        new HttpError(401, 'Falha ao autenticar token de acesso.');
        
      req.userId = decoded.id;
      next();
    });
  } catch (e) {
    next(e)
  }
}
