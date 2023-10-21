# <img src="doc/upay-logo.jpeg" width="23px" alt="upay-logo"> uPay
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Testing Instructions

1. **Access Customer Side Application**: Open the following link in your web browser: [Customer Payment Application](https://upay-customer-sui.vercel.app/).

2. **Access Merchant Side Application**: Open the following link in your web browser: [Merchant Payment Application](https://upay-merchant-sui.vercel.app/).

3. **Connect Your SUI Wallet**: To interact with the application on the SUI Testnet, you'll need to connect your SUI wallet. Make sure you have SUI wallet installed and set up in your browser.

3. **Create Payment QR Code**: In the merchant side application, click on the "Register as Merchant" button, enter payment ID, coin/token of choice (currently, only USDT is supported) and amount of token to receive. After entering the values share/show the QR code to the customer to receive the payment.

4. **Make Payments**: In the customer side application, login and scan the merchant side application QR code. Make the payment in any crypto token/coin of your choice (currently, the only supported coin is SUI).

**Note:** Please ensure that you're using the application on the SUI Testnet and have the SUI wallet connected for testing.
