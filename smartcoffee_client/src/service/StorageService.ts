/**
 * @author dtraum
 * @date 26.11.2021
 */
import { Storage } from "@capacitor/storage";
import { reactive } from "vue";
import { RoutineData } from "../lib/RoutineData";

class StorageService {

    data = reactive({
        name: 'unset',
        routines: [] as Array<RoutineData>
    });

    constructor() {
        this.initDefaults();
    }

    async initDefaults() {
        const name = await this.get('name');
        if (name !== null) {
            this.data.name = name;
        }
        const routines = await this.get('routines');
        if (routines !== null) {
            this.data.routines = JSON.parse(routines);
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

    async addRoutine(routine: RoutineData) {
        this.data.routines.push(routine);
        await this.set('routines', JSON.stringify(this.data.routines));
    }
}

export default new StorageService;
