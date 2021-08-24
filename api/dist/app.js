"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db = require('./models');
const routers = require('./routes');
// Database
const app = express_1.default();
// Body Parser
app.use(express_1.default.urlencoded({ extended: false }));
// Set static folder
app.use("/", express_1.default.static("build/public"));
// Routes
app.use(express_1.default.json());
app.use('/', routers);
const PORT = process.env.PORT || 5000;
console.log(db);
// db.authenticate().then(() => {
//   console.log('Connected')
// })
app.listen(PORT, () => console.log(`Now browse to localhost:${PORT}`));
//# sourceMappingURL=app.js.map