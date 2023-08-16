# Masa Analytics React

A customizable, easy-to-use React component for connecting to Masa Analytics, written in TypeScript.

## Features

- Easy integration with any React application
- Customizable event handling
- Written in TypeScript for better type safety and developer experience

## Events Tracking and Usage

This package provides built-in support for tracking different types of events:

- [Page Visit Event](#page-visit-event)
- [Wallet Connect Event](#wallet-connect-event)
- [Login Event](#login-event)
- [Mint Event](#mint-event)

These events can be easily integrated into your application to gather insights about user interactions.

### Page Visit Event

`firePageViewEvent` function is provided to send a page visit event to your API. It takes the following parameters:

- `page`: A unique identifier of the page visited.
- `user_address`: The users wallet address.

#### Usage

```typescript
import { useMasaAnalyticsReact } from "@masa-finance/analytics-react";

const { firePageViewEvent } = useMasaAnalyticsReact({
  clientApp: "My App",
  clientName: "My Company Name",
});

// Track a page visit event
const user_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
const page = "https://your-site.example.com/page1";

void firePageViewEvent(page, user_address);
```

### Wallet Connect Event

`fireLoginEvent` function is provided to send a wallet connect event to your API. It takes the following parameters:

- `user_address`: The users wallet address.
- `connector`: The users wallet connector. e.g "metamask" "walletconnect"

#### Usage

```typescript
import { useMasaAnalyticsReact } from "@masa-finance/analytics-react";

const { firePageViewEvent, fireConnectWalletEvent, fireMintEvent } =
  useMasaAnalyticsReact({
    clientApp: 'My App',
    clientName: 'My Company Name',
  });


// Track a wallet connect event
const user_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
const connector = "metamask"

void fireConnectWalletEvent(user_address, connector);
```

### Login Event

`fireLoginEvent` function is provided to send a login event to your API. It takes the following parameters:

- `user_address`: The users wallet address.

#### Usage

```typescript
import { useMasaAnalyticsReact } from "@masa-finance/analytics-react";

const { fireLoginEvent } = useMasaAnalyticsReact({
  clientApp: "My App",
  clientName: "My Company Name",
});

// Track a login event
const user_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";

void fireLoginEvent(user_address);
```



### Mint Event

`fireMintEvent` function is provided to send a mint event to your API. It takes the following parameters:

- `user_address`: The users wallet address.
- `network`: The blockchain network of the mint operation.
- `contract_address`: The address of the contract of the mint operation.
- `token_name`: The token name of the contract of the mint operation.
- `ticker`: The ticker of the contract of the mint operation.
- `token_type`: The type of the contract of the mint operation.

#### Usage

```typescript
import { useMasaAnalyticsReact } from "@masa-finance/analytics-react";

const { fireMintEvent } = useMasaAnalyticsReact({
  clientApp: "My App",
  clientName: "My Company Name",
});

// Track a mint event
const user_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
const network = "goerli";
const contract_address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
const token_name = "My SBT Project";
const ticker = "MSP";
const token_type = "SBT";

void fireMintEvent(
  user_address,
  network,
  contract_address,
  token_name,
  ticker,
  token_type
);
```

These events can be used to monitor user interactions with your website, helping you make data-driven decisions and improve the user experience.

## Installation

You can install the `@masa-finance/analytics-react` package using either npm or yarn:

### Using npm

```bash
npm install @masa-finance/analytics-react
```

### Using yarn

```bash
yarn add @masa-finance/analytics-react
```

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

For bug reports and feature requests, please [create an issue](https://github.com/masa-finance/analytics-react/issues) on GitHub.

## License

`analytics-react` is released under the [MIT License](LICENSE).
