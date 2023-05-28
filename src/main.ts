import { Database } from "./pattern-instances/creational/singleton.ts"
import { Person } from "./pattern-instances/creational/prototype.ts"
import { ProxyInternet } from "./pattern-instances/structural/proxy.ts"
import { Subject, EmailObserver, SMSObserver } from "./pattern-instances/behavioral/observer.ts"

import { Connection } from "./common/types.ts"

// Singleton pattern usage example:
const database1 = Database.getInstance();
const database2 = Database.getInstance();

console.log(database1 === database2);

database1.addData("First data");
database1.addData("Second data");
console.log(database2.getData());

// Prototype pattern usage example:
const john = new Person("John", 30);
john.greet();

const jane = john.clone();
jane.name = "Jane";
jane.greet();

// Proxy pattern usage example:
const internet: Connection = new ProxyInternet();

internet.connectTo("www.google.com");
internet.connectTo("www.facebook.com");

// Observer pattern usage example:
const subject: Subject = new Subject();

const emailObserver: EmailObserver = new EmailObserver();
const smsObserver: SMSObserver = new SMSObserver();

subject.attach(emailObserver);
subject.attach(smsObserver);

subject.notify("Hello world!");

subject.detach(emailObserver);

subject.notify("Goodbye!");
