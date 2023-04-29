# zkSTB 🍪

A customizable, easy-to-use React component for displaying a cookie consent banner on your website, written in TypeScript. This package helps you comply with GDPR requirements by informing users about the use of cookies on your website and allowing them to accept or decline.

## Features

- Easy integration with any React application
- Customizable event handling for accepting or declining cookies
- Written in TypeScript for better type safety and developer experience
- Includes utility functions for handling cookies
- Supports Ethereum message signing and page visit tracking

## Events Tracking and Usage

This package provides built-in support for tracking two types of events: Ethereum message signing and page visits. These events can be easily integrated into your application to gather insights about user interactions.

### Ethereum Message Signing Event

`signMessageAndTrack` function is provided to sign Ethereum messages and track the event. It takes the following parameters:

- `provider`: An instance of `ethers.Provider` or any compatible provider.
- `signer`: An instance of `ethers.Signer` representing the user's Ethereum wallet.
- `message`: The message to be signed.
- `apiUrl`: The API URL where the event data will be sent.

#### Usage

```javascript
import { signMessageAndTrack } from 'zksbt-cookie';
import { ethers } from 'ethers';

// Set up the provider and signer
const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/YOUR_API_KEY');
const signer = provider.getSigner();

// Sign a message and track the event
const message = 'Hello, World!';
const apiUrl = 'https://your-api.example.com/events';
signMessageAndTrack(provider, signer, message, apiUrl);
```

### Page Visit Event

`trackPageVisit` function is provided to send a page visit event to your API. It takes the following parameters:

- `accountId`: A unique identifier for the user, such as a user ID or Ethereum address.
- `apiUrl`: The API URL where the event data will be sent.
- `pageName` (optional): A custom name for the page being visited.
- `additionalData` (optional): Additional data to be included in the event payload.

#### Usage

```javascript
import { trackPageVisit } from 'zksbt-cookie';

// Track a page visit event
const accountId = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e';
const apiUrl = 'https://your-api.example.com/events';
const pageName = 'Homepage';
const additionalData = { referrer: document.referrer };

trackPageVisit(accountId, apiUrl, pageName, additionalData);
```

These events can be used to monitor user interactions with your website, helping you make data-driven decisions and improve the user experience.

## Installation

You can install the `zksbt-cookie` package using either npm or yarn:

### Using npm

```bash
npm install zksbt-cookie
```

### Using yarn

```bash
yarn add zksbt-cookie
```

## Usage

### Basic Example

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { CookieConsentBanner } from 'zksbt-cookie';

function App() {
  return (
    <div>
      <h1>Welcome to My Website</h1>
      <CookieConsentBanner />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

### Custom Event Handling

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { CookieConsentBanner } from 'zksbt-cookie';

function onAccept() {
  console.log('User accepted cookies.');
}

function onDecline() {
  console.log('User declined cookies.');
}

function App() {
  return (
    <div>
      <h1>Welcome to My Website</h1>
      <CookieConsentBanner onAccept={onAccept} onDecline={onDecline} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

## Repo Structure and Files

- `src/`: The source code for the package.
  - `CookieConsentBanner.tsx`: The main React component for the cookie consent banner.
  - `cookieUtils.ts`: Utility functions for setting, getting, and deleting cookies.
  - `messageSigningTracker.ts`: Functions for signing Ethereum messages and tracking events.
  - `pageVisitTracker.ts`: Functions for tracking page visits and sending event data to an API.
  - `index.ts`: Exports all the components and functions from the package.
- `tsconfig.json`: TypeScript configuration file for compiling the package.
- `package.json`: Defines the package metadata, dependencies, and build scripts.

## Publishing to npm

Before publishing to npm, ensure that you have all the required dependencies installed:

```bash
npm install
```

Next, build the package:

```bash
npm run build
```

Now, you should see a `dist` folder containing the compiled JavaScript files.

To publish the package to npm, first log in to your npm account using the command line:

```bash
npm login
```

Enter your username, password, and email when prompted.

Finally, publish the package:

```bash
npm publish
```

Your package is now published to npm and can be installed and used in other projects.

## Contributing

We welcome contributions from the community! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a branch with a descriptive name related to the issue or feature you're working on.
3. Make your changes and commit them with clear and concise commit messages.
4. Create a pull request, explaining the changes you made and their purpose.

For bug reports and feature requests, please [create an issue](https://github.com/masa-finance/zksbt-cookie/issues) on GitHub.

## License

`zksbt-cookie` is released under the [MIT License](LICENSE).

By adding these sections, your README will be more comprehensive and provide all the necessary information for developers to use, contribute to, and understand the licensing of your package.




