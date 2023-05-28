import { Connection } from "../../common/types.ts"

class RealInternet implements Connection {
    public connectTo(url: string): void {
        console.log(`Connecting to ${url}`);
    }
}

export class ProxyInternet implements Connection {
    private realInternet: RealInternet = new RealInternet();
    private bannedSites: string[] = ["www.facebook.com", "www.twitter.com"];

    public connectTo(url: string): void {
        if (this.bannedSites.indexOf(url) !== -1) {
            console.log(`Access to ${url} is denied`);
        } else {
            this.realInternet.connectTo(url);
        }
    }
}
