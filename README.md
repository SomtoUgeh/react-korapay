# React-Korapay

![Demo](https://github.com/SomtoUgeh/react-korapay/raw/master/media/demo.png)

> This is a react package for implementing korapay collection gateway

## Installation

```bash
$ npm i --save react-korapay
# or
$ yarn add react-korapay
```

## Examples

- Basic -
  [CodeSandbox](https://codesandbox.io/s/react-korapay-example-o6h3j?file=/src/App.js:0-26)

```javascript
import React from "react";
import { useKorapay, KorapayButton } from "react-korapay";

const config = {
  public_key: "pk_test_**your_public_key**",
  amount: 2000,
  customer: {
    name: "John doe",
    email: "johndoe@gmail.com"
  },
  narration: "Testing korapay"
};

export default function App() {
  const korapayBtnConfig = {
    ...config,
    onClose: () => {},
    onSuccess: () => {},
    text: "Pay with korapay!"
  };

  const [handleKorapay] = useKorapay(config);

  return (
    <div className="App">
      <h1>React Wrapper for Korapay collections</h1>
      <h2>Check it out!</h2>

      <div>
        <button
          onClick={() =>
            handleKorapay({
              onClose: () => {},
              onSuccess: () => {}
            })
          }
        >
          Pay now!
        </button>

        <KorapayButton {...korapayBtnConfig} />
      </div>
    </div>
  );
}
```

Please checkout
[Korapay Documentation](https://korahq.atlassian.net/wiki/spaces/AR/pages/1064370549/Collection+Modal)
for other available options you can add to the tag

## License

This project is licensed under the MIT License - see the
[LICENSE.md](LICENSE) file for details

## Contributions ✨

> Special thanks to Ayeni Olusegun, your work on [react-paystack](https://github.com/iamraphson/react-paystack) helped alot!

1. Fork it!
2. Create your feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Some commit message'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

This project follows the
[all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!
