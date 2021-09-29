import { BaseService } from "./base.service";

export class BlockUnitService extends BaseService {

    static async post(data: any) {
        return await this.create().post('/blockunits', data);
    }

    static async getFormated() {
        return await this.create().get('/blockunits/formated');
    }
}
