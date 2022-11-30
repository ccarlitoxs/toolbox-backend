export const promisesMock = [
  {
    status: "fulfilled",
    value: {
      status: 200,
      statusText: "OK",
      headers: ["AxiosHeaders"],
      config: ["Object"],
      request: ["ClientRequest"],
      data: `file,text,number,hex`,
    },
  },
  {
    status: "fulfilled",
    value: {
      status: 200,
      statusText: "OK",
      headers: ["AxiosHeaders"],
      config: ["Object"],
      request: ["ClientRequest"],
      data: `file,text,number,hex
        test3.csv,ZOMUn
        test3.csv,ioNukA,21,b415746ee1a258420517803f8cc7ece3
        test3.csv,gYgPKM,6097351,14ca4f24c344d624bd98fc1cc022bc92
        test3.csv,PlODczMPdSijuXscxQYAGcfh,07,c5d87a0f7364524fc6a7d6068d2aa8c5`,
    },
  },
  {
    status: "rejected",
    reason: {
      code: "ERR_BAD_RESPONSE",
      config: ["Object"],
      request: ["ClientRequest"],
      response: ["Object"],
      origin: "",
    },
  },
];

export const filesData = [
  [],
  [
    { file: "test2.csv", text: "uMHde" },
    {
      file: "test2.csv",
      text: "mOUwsMlSXSZO",
      number: "0229218040",
      hex: "c4d6112cbc20a1e230d37e19848f5e41",
    },
  ],
  [
    { file: "test3.csv", text: "ZOMUn" },
    {
      file: "test3.csv",
      text: "ioNukA",
      number: "21",
      hex: "b415746ee1a258420517803f8cc7ece3",
    },
    {
      file: "test3.csv",
      text: "gYgPKM",
      number: "6097351",
      hex: "14ca4f24c344d624bd98fc1cc022bc92",
    },
    {
      file: "test3.csv",
      text: "PlODczMPdSijuXscxQYAGcfh",
      number: "07",
      hex: "c5d87a0f7364524fc6a7d6068d2aa8c5",
    },
  ],
  [
    { file: "test9.csv", text: "wVbPb" },
    {
      file: "test9.csv",
      text: "SImYjEkfRTzvegsPCXOPVIk",
      number: "471649737",
      hex: "1da47041df5c41accfe1463e234dc176",
    },
  ],
];

export const formattedFiles = [
  {
    file: "test2.csv",
    lines: [
      {
        file: "test2.csv",
        text: "zbUdFwtZhZMadNHIlR",
        number: "79",
        hex: "7bf703010db07dfa2d256e621cc8844b",
      },
    ],
  },
  {
    file: "test3.csv",
    lines: [
      {
        file: "test3.csv",
        text: "HyTrnleaxVkLlhAwZyRELwc",
        number: "3",
        hex: "665822f5f99917d5a7f169f6704fe220",
      },
      {
        file: "test3.csv",
        text: "HmTPaW",
        number: "6352388",
        hex: "238fbfce0800a80c6fb84d7c1d08a90c",
      },
      {
        file: "test3.csv",
        text: "obi",
        number: "9",
        hex: "1d95b471e6e227377e7b66f7ef0a06f0",
      },
    ],
  },
  {
    file: "test6.csv",
    lines: [
      {
        file: "test6.csv",
        text: "fAMsoyEFUdEMtDJGEVdUMXDWL",
        number: "687643",
        hex: "46829a0e047624d206ed3b3911ceaf42",
      },
      {
        file: "test6.csv",
        text: "P",
        number: "84958",
        hex: "6353df04a5a91a60f8ee2471afdb30a2",
      },
      {
        file: "test6.csv",
        text: "aPdickLYZMTSob",
        number: "82260288",
        hex: "b9525b3f87c8a2c824c73026a06760dc",
      },
      {
        file: "test6.csv",
        text: "zUABEiRqGULlQYDbsPhEsN",
        number: "06474466566675467167416410421645",
        hex: "aad03d28e9976b7c294a1d6c0b708221",
      },
      {
        file: "test6.csv",
        text: "HapDMnUrFluFnrsMhMkCv",
        number: "36593318",
        hex: "7a95ca5e584c403fa88357f61a4bf6ca",
      },
      {
        file: "test6.csv",
        text: "UfgTvlHyDuIkPEtGhXgapXiZuL",
        number: "445",
        hex: "f345cdb32012a5386041623db99a251e",
      },
      {
        file: "test6.csv",
        text: "FQZ",
        number: "7",
        hex: "dea2785b679719f505ecb8f7698ffbd6",
      },
      {
        file: "test6.csv",
        text: "ZIJNLutFQHzm",
        number: "13171406",
        hex: "0b8bf25fbe83334b87060761398c4239",
      },
    ],
  },
  {
    file: "test9.csv",
    lines: [
      {
        file: "test9.csv",
        text: "ChTHonqybW",
        number: "03",
        hex: "3d31fb7233a086c4bee151c77d82d332",
      },
      {
        file: "test9.csv",
        text: "TEtdgtirIGPAvAiqHBdrVCVFuO",
        number: "7857720",
        hex: "8a4ea98262edf5ab1d738c6fbec39136",
      },
      {
        file: "test9.csv",
        text: "OeeHqMcYGuvdxKApRVarWYJZP",
        number: "6",
        hex: "79f17e526da273a0be349120b24a8638",
      },
      {
        file: "test9.csv",
        text: "qlxjBQkEuT",
        number: "73502926279291402928386672078042",
        hex: "2555447ae66b4b2382e10ce1cfeeb626",
      },
      {
        file: "test9.csv",
        text: "MzVuzrjSKBwqRanOCwY",
        number: "320185",
        hex: "4238edf270d1c5c7f64e9b102a011e68",
      },
      {
        file: "test9.csv",
        text: "iKJMHWvzZOIVkxGXtCHzKDHGNderg",
        number: "111564277",
        hex: "afa467faefdc88612ea30eeeed2aed07",
      },
      {
        file: "test9.csv",
        text: "MTvDTZZeEItzjA",
        number: "1667",
        hex: "5b06957b3ecdeed72a8ea9a4f0ec8956",
      },
      {
        file: "test9.csv",
        text: "DLcpE",
        number: "55",
        hex: "e2e204435e5bd2843933f2173085c7d3",
      },
      {
        file: "test9.csv",
        text: "q",
        number: "7139789",
        hex: "e0c9d27b55b692d93956d5623fe3b4d3",
      },
      {
        file: "test9.csv",
        text: "GydLIFylNWCygVSYovZhlfUCJjIm",
        number: "98704238",
        hex: "cb7fbdf041ce4fbe749f23f4e1942b31",
      },
    ],
  },
];
