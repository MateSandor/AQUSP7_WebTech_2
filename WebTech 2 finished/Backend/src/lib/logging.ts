export default class Logging {
	public static success = (args: any) => console.log(`\x1b[32m ${args}\x1b[0m`);
	public static warning = (args: any) => console.log(`\x1b[33m ${args}\x1b[0m`);
	public static info = (args: any) => console.log(`\x1b[36m ${args}\x1b[0m`);
	public static error = (args: any) => console.log(`\x1b[31m ${args}\x1b[0m`);
}
