import {DataTypes, Model} from "sequelize";
import {SequelizeConnection} from "../utils/sequelize";

export default class Player extends Model {
    declare id: number;
    declare name: string;
    declare birthday: Date;
}

const sequelizeConnection = SequelizeConnection.getInstance();

Player.init({
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING
        },
        birthday: {
            type: DataTypes.DATE
        },
        jalka: {
            type: DataTypes.TEXT
        }
        },
        {
            sequelize: sequelizeConnection,
            tableName: "players",
            modelName: "Player",
        },
    );

Player.sync({ alter: true });
