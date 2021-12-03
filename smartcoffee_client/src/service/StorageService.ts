/**
 * @author dtraum
 * @date 26.11.2021
 */
import { Storage } from "@capacitor/storage";
import { reactive } from "vue";

class StorageService {

    data = reactive({
        name: ''
    });
    
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
}

export default new StorageService;
