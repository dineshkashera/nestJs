"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
const Company_1 = require("./Company");
const userDetails = new User_1.User();
console.log(`User details:`, userDetails);
const companyDetails = new Company_1.Company();
console.log('Company details:', companyDetails);
