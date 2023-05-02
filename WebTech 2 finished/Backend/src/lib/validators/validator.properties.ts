export const partPostProperties: readonly string[] = ['title', 'author','brand'];
export const partPutProperties: readonly string[] = ['title', 'author','brand'];

export const nameRegex: RegExp = new RegExp(/^([A-ZÁÉÚŐÓÜÖŰ]([a-záéúőóüöű.]{1,}\s?)){2,}$/u);
export const titleRegex: RegExp = new RegExp(/^([A-ZÁÉÚŐÓÜÖŰ]([a-záéúőóüöű.]{1,}\s?))/u);
