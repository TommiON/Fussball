import { Club } from "../domain/club/club";
import { sequelizeConnection } from "../utils/database";
import { Model, DataType } from 'sequelize-typescript';
// const { ClubModel } = require('../schemas/club');

export function test() {
    let newClub = new Club('FC Orvokki');
    return newClub;
}

export async function getAll() {
    try {
        const tulos = await ClubModel.findAll();
        console.log('* service: ', tulos);
        return tulos;
    } catch (error) {
        console.log('mit vit...')
    }
    
    // todo...
}

class ClubModel extends Model {}

ClubModel.init({
    id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name : {
        type: DataType.STRING,
        allowNull: false
    },
    established: {
        type: DataType.DATE,
        allowNull: false
    }
}, {
    sequelize: sequelizeConnection,
    timestamps: false,
    modelName: 'club'
});


