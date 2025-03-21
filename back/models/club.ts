import {DataTypes, Model} from "sequelize";
import {SequelizeConnection} from "../utils/sequelize";

export default class Club extends Model {
    declare id: number;
    declare name: string;
    declare established: Date;
}

const sequelizeConnection = SequelizeConnection.getInstance();

Club.init(
    {
        id: {
            field: 'id',
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            field: 'name',
            type: DataTypes.STRING
        },
        established: {
            field: 'established',
            type: DataTypes.DATE
        }
    },
    {
        sequelize:  sequelizeConnection,
        tableName: "clubs",
        modelName: "Club",
    },
);

Club.sync({ alter: true });