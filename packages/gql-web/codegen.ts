import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      "http://localhost:8002/v1/graphql": {
        headers: {
          "X-Hasura-Admin-Secret": "adminsecret",
        },
      },
    },
  ],
  documents: ["../../apps/web-app/app/**/*.{ts,tsx}"],
  ignoreNoDocuments: true,
  generates: {
    "generated/": {
      preset: "client",
      plugins: [],
      config: {
        useTypeImports: true,
        scalars: {
          uuid: "string",
        },
      },
      presetConfig: {
        // recommended by graphql-codegen since it's not actually a react hook
        // https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#the-usefragment-helper
        fragmentMasking: { unmaskFunctionName: "getFragmentData" },
      },
    },
  },
};

export default config;
