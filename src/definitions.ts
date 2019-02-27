declare global {
  interface PluginRegistry {
    ZendeskChat?: ZendeskChatPlugin;
  }
}

export interface ChatConfig {
  tags?: string[],
  department?: string,
}

export interface VisitorInfo {
  name?: string,
  email?: string,
  phoneNumber?: string,
}

export interface ZendeskChatPlugin {
  initialize(): void
  open(config: ChatConfig): void
  setVisitorInfo(visitorInfo: VisitorInfo): void
}
