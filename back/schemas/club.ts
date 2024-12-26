import { sequelizeConnection } from "../utils/database";
import { Model, DataType, Optional } from "sequelize-typescript";

interface ClubAttributes {
    id: number,
    name: string,
    established: Date,
}

interface ClubCreationAttributes extends Optional<ClubAttributes, 'id'> {}

class ClubModel extends Model<ClubAttributes, ClubCreationAttributes> implements ClubAttributes {
    declare public id: number;
    public name!: string;
    public established!: Date;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

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
    //sequelize: sequelizeConnection,
    sequelizeConnection,
    timestamps: true,
    modelName: 'club',
    tableName: 'clubs'
});

sequelizeConnection.sync();

export { ClubModel, ClubAttributes, ClubCreationAttributes };
