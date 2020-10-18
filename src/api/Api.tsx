import { ApiSettings } from './ApiSettings';
import { Content } from './Content';

export class Api {
  public readonly content: Content;

  private settings: ApiSettings;

  constructor(baseUrl: string) {
    this.settings = new ApiSettings(baseUrl);

    this.content = new Content(this.settings);
  }

  public setToken(token: string | null) {
    this.settings.setToken(token);
  }
}
