import { Dialect, Sequelize} from "sequelize";

export class SequelizeConnection {
    // Connection instance
    private static instance: Sequelize;

    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor() {
        // Information needed to initialize database connection
        const dbName = process.env.DB_NAME as string
        const dbUser = process.env.DB_USER as string
        const dbUrl = process.env.DATABASE_URL
        const dbDriver = process.env.DB_DRIVER as Dialect
        const dbPassword = process.env.DB_PASSWORD as string

        // Initialize connection
        SequelizeConnection.instance = new Sequelize(
            'postgres://postgres:sekred@localhost:5432/postgres',
            {
                host: 'localhost',
                dialect: 'postgres'
            }
        );

        // Test connection
        SequelizeConnection.instance.authenticate().then(() => {
            console.log('Sequelize yhdistetty')
        })
    }

    /**
     * The static method that controls the access to the singleton instance.
     *
     */
    public static getInstance(): Sequelize {
        if (!SequelizeConnection.instance) {
            new SequelizeConnection();
        }

        return SequelizeConnection.instance;
    }
}