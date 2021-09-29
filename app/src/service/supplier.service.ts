import { BaseService } from "./base.service";

export class SupplierService extends BaseService {

    static async post(data: any) {
        return await this.create().post('/suppliers', data);
    }
}
