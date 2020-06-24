import { Page, Browser, findBy, WebComponent } from '@lib';

export class RedditHomePage extends Page {
  @findBy('#2x-container') header: WebComponent;

  constructor(browser: Browser) {
    super(browser);
  }
}
