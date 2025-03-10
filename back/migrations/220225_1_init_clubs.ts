import { DataTypes } from 'sequelize';

module.exports = {
    up: async ({ context: queryInterface }) => {
        await queryInterface.createTable('clubs', {
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
                name: 'established',
                type: DataTypes.DATE
            }
        })
    },
    down: async ({ context: queryInterface }) => {
        await queryInterface.dropTable('clubs')
    }


}
