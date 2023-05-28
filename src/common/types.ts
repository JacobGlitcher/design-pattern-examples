export interface Connection {
    connectTo(url: string): void;
}

export interface Observer {
    update(message: string): void;
}
