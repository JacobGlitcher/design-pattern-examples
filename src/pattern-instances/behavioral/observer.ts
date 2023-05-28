import { Observer } from "../../common/types.ts"

export class Subject {
    private observers: Observer[] = [];

    public attach(observer: Observer): void {
        this.observers.push(observer);
    }

    public detach(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index >= 0) {
            this.observers.splice(index, 1);
        }
    }

    public notify(message: string): void {
        for (const observer of this.observers) {
            observer.update(message);
        }
    }
}

export class EmailObserver implements Observer {
    public update(message: string): void {
        console.log(`Sending email with message: ${message}`);
    }
}

export class SMSObserver implements Observer {
    public update(message: string): void {
        console.log(`Sending SMS with message: ${message}`);
    }
}
