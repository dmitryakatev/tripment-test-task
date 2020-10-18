export class ApiSettings {
  private baseUrl: string;

  private token: string | null;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.token = null;
  }

  public getBaseUrl() {
    return this.baseUrl;
  }

  public setToken(token: string | null) {
    this.token = token;
  }

  public getToken() {
    return this.token;
  }
}
