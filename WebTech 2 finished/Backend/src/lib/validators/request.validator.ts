import { body } from 'express-validator';
import { Status } from '../../models/types/status.type';
import { nameRegex, titleRegex } from './validator.properties';

export default class Validators {
	public static validExpired = () => {
		return body('expired').custom((expiredDate) => {
			const inputDate: Date = new Date(expiredDate);

			if (inputDate < new Date()) {
				return Promise.reject('Invalid date!');
			} else {
				return Promise.resolve();
			}
		});
	};

	public static validBirth = () => {
		return body('birth').custom((birthDate) => {
			const inputDate: Date = new Date(birthDate);

			if (inputDate >= new Date() || inputDate.getFullYear() <= 1920) {
				return Promise.reject('Invalid date!');
			} else {
				return Promise.resolve();
			}
		});
	};

	public static emailValidator = () => {
		return body('email').isEmail();
	};

	public static notEmptyValidator = (props: string) => {
		return body(props).not().isEmpty().trim().escape();
	};

	public static nameValidate = (prop: string) => {
		return body(prop).custom((fetchName) => {
			const valid = nameRegex.test(fetchName);
			if (!valid) {
				return Promise.reject('Invalid name!');
			} else {
				return Promise.resolve();
			}
		});
	};

	public static titleValidate = () => {
		return body('title').custom((fetchTitle) => {
			const valid = titleRegex.test(fetchTitle);
			if (!valid) {
				return Promise.reject('Invalid title!');
			} else {
				return Promise.resolve();
			}
		});
	};

	public static statusValidate = () => {
		return body('status').custom((status: string) => {
			if (status === 'expired' || status === 'active' || status === 'closed') {
				return Promise.resolve();
			} else {
				return Promise.reject('Invalid status code!');
			}
		});
	};
}
