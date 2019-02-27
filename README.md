# Capacitor Zendesk Chat plugin

/!\ The plugin only works for `android` and `ios` platform. /!\

## Installation

`npm i capacitor-zendesk-chat`

## Configuration

### Configure plugin 

Add your key on `capacitor.json` and sync it with `npx cap sync`.
```json
{
  "plugins": {
    "ZendeskChat": {
      "accountKey": "your-zendesk-account--key"
    }
  }
}

```
### Register plugin

Find the init component of your app and register the web plugin.

```javascript
import { registerWebPlugin } from "@capacitor/core";
import { ZendeskChat } from 'capacitor-zendesk-chat';

registerWebPlugin(ZendeskChat);
```

### Use it

```javascript
import { Plugins } from '@capacitor/core';

const { ZendeskChat } = Plugins;

// Initialize the plugin
ZendeskChat.initialize();

// Add Visitor info if needed
ZendeskChat.setVisitorInfo({
  name: "John Doe",
  email: "john@doe.com",
  phoneNumber: "+33 1 23 45 67 89"
})

// Open chat
ZendeskChat.open({
  tags: ["tag1", "tag2"], // You can add tags
  department: "department" // You can specify a department
});
```

## Platform: Web/PWA

The plugin is not available on `web` platform.

## Platform: Android


**Import the Zendesk Chat library** in `build.gradle`

```groovy
...
// Note that this is root level repositories container and not the one under 'buildScript'
repositories {
    maven { url 'https://zendesk.jfrog.io/zendesk/repo' }
}
...
dependencies {
    compile group: 'com.zopim.android', name: 'sdk-api', version: '1.4.2'
}
...
```

**Register the plugin** in `com.companyname.appname.MainActivity#onCreate`

```java
@Override
public void onCreate(Bundle savedInstanceState) {
  super.onCreate(savedInstanceState);

    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{

    ...

    add(ZendeskChat.class); // Add ZendeskChat Plugin
  }});
}
```

## Platform: iOS

On iOS the plugin is registered automatically by Capacitor.
