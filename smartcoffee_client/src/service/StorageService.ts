
/**
 * @author dtraum
 * @date 26.11.2021
 */

import {Storage} from "@capacitor/storage";

class StorageService {

    async set(key: string, value: string) {
        await Storage.set({key,value});
    }

    async get(key: string, defaultValue: string | null = null): Promise<string | null> {
        const value = (await Storage.get({key})).value;
        return value !== null ? value : defaultValue;
    }
}

export default new StorageService;