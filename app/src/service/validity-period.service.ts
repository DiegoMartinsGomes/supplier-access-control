import { BaseService } from "./base.service";

export class ValidityPeriodService extends BaseService {

    static async post(startDate: Date, endDate: Date) {
        return await this.create().post('/validityperiods',
            {
                startDate: startDate,
                endDate: endDate
            });
    }
}
