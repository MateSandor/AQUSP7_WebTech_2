"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validator_properties_1 = require("./validator.properties");
class Validators {
}
exports.default = Validators;
Validators.validExpired = () => {
    return (0, express_validator_1.body)('expired').custom((expiredDate) => {
        const inputDate = new Date(expiredDate);
        if (inputDate < new Date()) {
            return Promise.reject('Invalid date!');
        }
        else {
            return Promise.resolve();
        }
    });
};
Validators.validBirth = () => {
    return (0, express_validator_1.body)('birth').custom((birthDate) => {
        const inputDate = new Date(birthDate);
        if (inputDate >= new Date() || inputDate.getFullYear() <= 1920) {
            return Promise.reject('Invalid date!');
        }
        else {
            return Promise.resolve();
        }
    });
};
Validators.emailValidator = () => {
    return (0, express_validator_1.body)('email').isEmail();
};
Validators.notEmptyValidator = (props) => {
    return (0, express_validator_1.body)(props).not().isEmpty().trim().escape();
};
Validators.nameValidate = (prop) => {
    return (0, express_validator_1.body)(prop).custom((fetchName) => {
        const valid = validator_properties_1.nameRegex.test(fetchName);
        if (!valid) {
            return Promise.reject('Invalid name!');
        }
        else {
            return Promise.resolve();
        }
    });
};
Validators.titleValidate = () => {
    return (0, express_validator_1.body)('title').custom((fetchTitle) => {
        const valid = validator_properties_1.titleRegex.test(fetchTitle);
        if (!valid) {
            return Promise.reject('Invalid title!');
        }
        else {
            return Promise.resolve();
        }
    });
};
Validators.statusValidate = () => {
    return (0, express_validator_1.body)('status').custom((status) => {
        if (status === 'expired' || status === 'active' || status === 'closed') {
            return Promise.resolve();
        }
        else {
            return Promise.reject('Invalid status code!');
        }
    });
};
