export class Database {
    private static instance: Database;
    private data: string[];

    private constructor() {
        this.data = [];
    }

    public static getInstance(): Database {
        if (!Database.instance) {
            console.log("1111111111");

            Database.instance = new Database();
        }
        console.log("2222222222");
        return Database.instance;
    }

    public addData(item: string) {
        this.data.push(item);
    }

    public getData(): string[] {
        return this.data;
    }
}
