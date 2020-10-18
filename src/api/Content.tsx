import {
  ApiService,
  Result,
  IModel,
} from './ApiService';

export interface IDoctor {
  id: number;
  name: string;
  speciality: string;
  experience: number;
  gender: string;
  reviewsCount: number;
  acceptNew: boolean;
  address: string;
  insurances: string;
  telehealth: boolean;
  telehealthAvailable: Date;
  offlineAvailable: Date;
}

export class Content extends ApiService {
  public getDoctors(): Result<IDoctor[]> {
    return this.get<{items: Array<IModel>}>({
      url: 'server/data.json',
    }).then(([error, response, status]) => {
      if (error === null) {
        const doctors: IDoctor[] = response!.items!.map((item) => ({
          id: item.id,
          name: item.name,
          speciality: item.speciality,
          experience: item.experience,
          gender: item.gender,
          reviewsCount: item.reviewsCount,
          acceptNew: item.acceptNew,
          address: item.address,
          insurances: item.insurances,
          telehealth: item.telehealth,
          telehealthAvailable: new Date(item.telehealth_available),
          offlineAvailable: new Date(item.offline_available),
        }));

        return [error, doctors, status];
      }

      return [error, null, status];
    });
  }
}
