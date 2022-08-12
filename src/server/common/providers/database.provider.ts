import {createConnection, } from 'typeorm';
import { SqlServerConnectionOptions } from 'typeorm/driver/sqlserver/SqlServerConnectionOptions';

const options: SqlServerConnectionOptions = {
    type: 'mssql',
    host: 'localhost',
    username: 'sa',
    password: 'PASSWORD_HERE',
    database: 'SampleDB',
    cache: true,
    entities: ['src/server/common/data/models/**/*.model{.ts,.js}'],
    synchronize: true,
    migrationsTableName: '__MigrationHistory',
    migrations: ['src/server/common/data/migrations/**{.js,.ts}'],
    cli: {
        migrationsDir: 'src/server/common/data/migrations'
    }
};

export const databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: async () => await createConnection(options)
    },
];