export const config = {
    RPC_URL: "https://rpc-chronic.zenchainlabs.io/",
    REST_URL: "https://api-chronic.zenchainlabs.io/",
    CHAIN_ID: "morocco-1",
    CHAIN_NAME: "Chronic-Token",
    stakeCurrency: {
      COIN_DENOM: "CHT",
      COIN_MINIMAL_DENOM: "ucht",
      COIN_DECIMALS: 6,
    },
    bip44: {
      COIN_TYPE: 118,
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
        COIN_DENOM: "CHT",
        COIN_MINIMAL_DENOM: "ucht",
        COIN_DECIMALS: 6,
      },
      {
        COIN_DENOM: "CGAS",
        COIN_MINIMAL_DENOM: "ucgas",
        COIN_DECIMALS: 6,
      },
    ],
    feeCurrencies: [
      {
        COIN_DENOM: "CGAS",
        COIN_MINIMAL_DENOM: "ucgas",
        COIN_DECIMALS: 6,
      },
    ],
    gasPriceStep: {
      GAS_PRICE_STEP_LOW: 0.001,
      GAS_PRICE_STEP_AVERAGE: 0.0025,
      GAS_PRICE_STEP_HIGH: 0.003,
    },
    features: ['ibc-go', 'ibc-transfer'],
   };
