export const config = {
    RPC_URL: "https://rpc-chronic.zenchainlabs.io/",
    REST_URL: "https://api-chronic.zenchainlabs.io/",
    chainId: "morocco-1",
    chainName: "Chronic-Token",
    stakeCurrency: {
      coinDenom: "CHT",
      coinMinimalDenom: "ucht",
      coinDecimals: 6,
    },
    bip44: {
      coinType: 118,
    },
     "bech32Config": {
        "bech32PrefixAccAddr": "chronic",
        "bech32PrefixAccPub": "chronicpub",
        "bech32PrefixValAddr": "chronicvaloper",
        "bech32PrefixValPub": "chronicvaloperpub",
        "bech32PrefixConsAddr": "chronicvalcons",
        "bech32PrefixConsPub": "chronicvalconspub"
    },
    currencies: [
      {
        coinDenom: "CHT",
        coinMinimalDenom: "ucht",
        coinDecimals: 6,
      },
      {
        coinDenom: "CGAS",
        coinMinimalDenom: "ucgas",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "CGAS",
        coinMinimalDenom: "ucgas",
        coinDecimals: 6,
      },
    ],
    gasPriceStep: {
      low: 0.001,
      average: 0.0025,
      high: 0.003,
    },
    features: ["ibc-go"],
   });
