import { ApiSettings } from './ApiSettings';

export interface IOptions {
  url: string;
  params?: { [key: string]: any };
  headers?: HeadersInit;
}

export interface IModel {
  [propName: string]: any;
}

export type Result<T> = Promise<[string | null, T | null, number]>;

export abstract class ApiService {
  private settings: ApiSettings;

  constructor(settings: ApiSettings) {
    this.settings = settings;
  }

  protected get<T = IModel>(options: IOptions) {
    const { params } = options;
    let { url } = options;

    if (params) {
      const encodedParams = Object.entries(params).map(([key, value]) => (
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )).join('&');

      url += `?${encodedParams}`;
    }

    return this.request<T>('GET', url, options);
  }

  protected post<T = IModel>(options: IOptions) {
    return this.request<T>('POST', options.url, options);
  }

  protected put<T = IModel>(options: IOptions) {
    return this.request<T>('PUT', options.url, options);
  }

  protected delete<T = IModel>(options: IOptions) {
    return this.request<T>('DELETE', options.url, options);
  }

  private request<T>(
    method: string,
    url: string, options: IOptions,
  ): Result<T> {
    const baseUrl = this.settings.getBaseUrl();
    const token = this.settings.getToken();
    const { headers, params } = options;
    const queryParams: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        ...headers,
      },
    };

    if (token && queryParams.headers) {
      /* eslint-disable dot-notation */
      queryParams.headers['Authorization'] = token;
      /* eslint-enable dot-notation */
    }

    if (params && url === options.url) {
      queryParams.body = JSON.stringify(params);
    }

    return new Promise((resolve) => {
      fetch(baseUrl + url, queryParams).then((response) => {
        if (response.status === 401) {
          resolve(['Не авторизированый запрос', null, response.status]);
        } else {
          const contentType = response.headers.get('content-type');

          if (contentType && contentType.indexOf('application/json') !== -1) {
            response.json().then((data: any) => {
              if (data.success) {
                resolve([null, data.data, response.status]);
              } else {
                resolve([data?.errorText || 'Не известная ошибка', null, response.status]);
              }
            }).catch(() => {
              resolve(['Ошибка конвертации ответа', null, response.status]);
            });
          } else {
            resolve([null, null, response.status]);
          }
        }
      }).catch((error: Error) => {
        resolve([error?.message || '', null, 0]);
      });
    });
  }
}
