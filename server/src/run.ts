export interface ServerConfiguration {
    port: number
};

const CONFIG: ServerConfiguration = {
    port: 14000
};

const server = new Server(CONFIG);

