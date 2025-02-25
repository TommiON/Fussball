import { Dialect, Sequelize} from "sequelize";
import { Umzug, SequelizeStorage } from "umzug";

export class SequelizeConnection {
    // static singleton
    private static instance: Sequelize;

    private constructor() {
        // todo: ympäristömuuttujat ojennukseen
        const dbName = process.env.DB_NAME as string
        const dbUser = process.env.DB_USER as string
        const dbUrl = process.env.DATABASE_URL
        const dbDriver = process.env.DB_DRIVER as Dialect
        const dbPassword = process.env.DB_PASSWORD as string

        SequelizeConnection.instance = new Sequelize(
            'postgres://postgres:sekred@localhost:5432/postgres',
            {
                host: 'localhost',
                dialect: 'postgres'
            }
        );

        SequelizeConnection.instance.authenticate().then(() => {
            console.log('Sequelize yhdistetty')
        })

        this.runMigrations();
    }

    public static getInstance(): Sequelize {
        if (!SequelizeConnection.instance) {
            new SequelizeConnection();
        }

        return SequelizeConnection.instance;
    }

    public runMigrations = async () => {
        const migrator = new Umzug({
            migrations: {
                glob: 'migrations/*.ts',
              },
            storage: new SequelizeStorage({ SequelizeConnection.getInstance(), tableName: 'migrations' }),
            context: SequelizeConnection.instance.getQueryInterface(),
            logger: console,
        });

        const migrations = await migrator.up();

        console.log('Migrations up to date', {
            files: migrations.map((mig) => mig.name),
        })
    }
}