"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Database {
    configDatabase() {
        return {
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            database: 'aula',
            username: 'postgres',
            password: ''
        };
    }
}
exports.default = Database;
//# sourceMappingURL=database.js.map