import {DataTypes, Model} from "sequelize";
import {SequelizeConnection} from "../utils/sequelize";

export default class Club extends Model {
    declare id: number;
    declare name: string;
}

const sequelizeConnection = SequelizeConnection.getInstance();

/**
 * Initialize model, define sequelize connection, the name of the table,
 * it's attributes and relations
 */
Club.init(
    {
        id: {
            field: "id",
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            field: 'name',
            type: DataTypes.STRING
        }
    },
    {
        sequelize:  sequelizeConnection,
        tableName: "clubs",
        modelName: "Club",
    },
);

// Will create the table automatically if it's not found
Club.sync().then();