import { WebPlugin } from '@capacitor/core';
import { ZendeskChatPlugin } from './definitions';

export class ZendeskChatWeb extends WebPlugin implements ZendeskChatPlugin {
  constructor() {
    super({
      name: 'ZendeskChat',
      platforms: ['web']
    });
  }

  initialize(): void {
    return;
  }

  open(): void {
    return;
  }

  setVisitorInfo(): void {
    return;
  }
}

const ZendeskChat = new ZendeskChatWeb();

export { ZendeskChat };
