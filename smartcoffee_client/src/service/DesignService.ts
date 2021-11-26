
/**
 * @author dtraum
 * @date 26.11.2021
 */

import { reactive } from "vue";
import StorageService from "./StorageService";

interface DesignStatus {
    dark: boolean;
}

class DesignService {

    status: DesignStatus = reactive({
        dark: false
    });

    constructor() {
        StorageService.get('darkmode', 'false').then(value => {
            this.setDarkMode(value === 'true');
        });
    }

    setDarkMode(status: boolean) {
        if(status) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
        StorageService.set('darkmode', `${status}`);
    }
}

export default new DesignService;