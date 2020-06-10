export default class AppDebug {
    constructor() {
        this.log = []
    }

    storeLog(string) {
        let atTime = new Date().toLocaleString("ru-RU", { timeZone: "Asia/Novosibirsk" });
        let message = `[LOG] [${atTime}] ${string}`
        this.log.push(message);
    }

    getLog() {
        return this.log
    }
}