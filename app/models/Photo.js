import { Collaborator, Photo } from '.';

Photo.belongsTo(Collaborator, {as: 'collaborator', foreignKey: 'owner'});