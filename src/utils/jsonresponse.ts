export default class JSONResponse {
    public static toJSON(message: string, data: any) {
        return {
            message,
            data,
        };
    }
}
