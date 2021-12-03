/**
 * @author dtraum
 * @date 26.11.2021
 */
import { Storage } from "@capacitor/storage";
import { reactive } from "vue";

class StorageService {

    data = reactive({
        name: 'unset'
    });

    constructor() {
        this.initDefaults();
    }

    async initDefaults() {
        const name = await this.get('name');
        if(name !== null) {
            this.data.name = name;
        }
    }
    
    async set(key: string, value: string) {
        await Storage.set({ key, value });
    }

    async get(key: string, defaultValue: string | null = null): Promise<string | null> {
        const value = (await Storage.get({ key })).value;
        return value !== null ? value : defaultValue;
    }

    async setName(name: string) {
        this.data.name = name;
        await this.set('name', name);
    }

    async clear() {
        await Storage.clear();
    }
}

export default new StorageService;
