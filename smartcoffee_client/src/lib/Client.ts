/**
 * @author dtraum
 * @date 07.02.2022
 */

import StorageService from "@/service/StorageService";
import { toastController } from "@ionic/vue";
import { reactive } from "vue";

interface ClientSettings {
    ip: string;
}

export default new class Client {

    public settings = reactive({
        ip: '10.10.10.10'
    });

    constructor() {
        this.restoreSettings();
    }

    async restoreSettings() {
        const data = await StorageService.get("client_settings", null);
        if(data !== null) {
            const parsed = JSON.parse(data) as ClientSettings;
            this.settings = parsed;
        }
    }

    async saveSettings() {
        await StorageService.set('client_settings', JSON.stringify(this.settings));
    }

    async get(url: string): Promise<string | null> {
        return new Promise(resolve => {
            const fetchTarget = `http://${this.settings.ip}/${url}`;
            fetch(fetchTarget).then(response => {
                if(response.status === 200) {
                    response.text().then(text => {
                        resolve(text);
                    });
                } else {
                    toastController.create({
                        message: `Serverfehler: ${response.status} (${response.statusText})`
                    }).then(toast => toast.present());
                    resolve(null);
                }
            }).catch(error => {
                console.log(error);
                toastController.create({
                    message: `Fehler: Server nicht erreichbar. Überprüfen sie die Server-IP in den Einstellungen.`
                }).then(toast => toast.present());
                resolve(null);
            });
        });
    }


}