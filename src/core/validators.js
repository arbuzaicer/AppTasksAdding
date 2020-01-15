
export class Validators {
    static requiredField(str) {
        return str && str.trim();
    }

    static checkLength(len) {
        return value => value.length>=len;
    }
}