import { Collaborator, Photo, Responsible} from '.';

Collaborator.belongsTo(Responsible, { foreignKey: 'responsible_id' })
Collaborator.hasMany(Photo, {foreignKey: 'owner' });

