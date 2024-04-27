import sequelize from '../db.js';
import Paciente from './paciente.js';
import Consulta from './consulta.js';

export function sync() {sequelize.sync().then(() => {
});
}

export { Paciente, Consulta };
