import {createPool} from 'mysql2/promise';

export const pool = createPool({
        host: 'boxb4cfvsxmkcnxhmkbk-mysql.services.clever-cloud.com',
        port: 3306,
        database: 'boxb4cfvsxmkcnxhmkbk',
        user: 'u8qzi582zuyygfde',
        password: 'dqOUuQMxD7eohFZHPCZL',
        waitForConnections: true,
       connectionLimit: 5,
       queueLimit: 0,
    });
