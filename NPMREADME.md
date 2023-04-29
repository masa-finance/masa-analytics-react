# zkSTB 🍪

A customizable, easy-to-use React component for displaying a cookie consent banner on your website, written in TypeScript. This package helps you comply with GDPR requirements by informing users about the use of cookies on your website and allowing them to accept or decline.

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

After installing the package, you can import and use the `CookieConsentBanner` component, the event tracking functions, and other utility functions in your React application.

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

### Ethereum Message Signing Example

```javascript
import React, { useCallback } from 'react';
import { signMessageAndTrack } from 'zksbt-cookie';
import { ethers } from 'ethers';

const App = () => {
  const signAndTrackMessage = useCallback(async () => {
    // Set up the provider and signer
    const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/YOUR_API_KEY');
    const signer = provider.getSigner();

    // Sign a message and track the event
    const message = 'Hello, World!';
    const apiUrl = 'https://your-api.example.com/events';
    await signMessageAndTrack(provider, signer, message, apiUrl);
  }, []);

  return (
    <div>
      <h1>Ethereum Message Signing Example</h1>
      <button onClick={signAndTrackMessage}>Sign and Track Message</button>
    </div>
  );
};

export default App;
```

For more details on usage, events tracking, contributing, and licensing, please refer to the [GitHub repository README](https://github.com/masa-finance/zksbt-cookie/blob/main/README.md).