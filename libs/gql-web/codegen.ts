import type { CodegenConfig } from "@graphql-codegen/cli";

const endpoint = process.env["HASURA_GRAPHQL_ENDPOINT"];
const adminSecret = process.env["HASURA_GRAPHQL_ADMIN_SECRET"];
if (!endpoint || !adminSecret) {
  throw new Error("Missing GraphQL engine connection details or admin secret");
}

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [`${endpoint}/v1/graphql`]: {
        headers: { "X-Hasura-Admin-Secret": adminSecret },
      },
    },
  ],
  documents: ["../../apps/web-app/app/**/*.{ts,tsx}"],
  ignoreNoDocuments: true,
  generates: {
    "generated/": {
      preset: "client",
      plugins: [],
      config: { useTypeImports: true, scalars: { uuid: "string" } },
      presetConfig: {
        // recommended by graphql-codegen since it's not actually a react hook
        // https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#the-usefragment-helper
        fragmentMasking: { unmaskFunctionName: "getFragmentData" },
      },
    },
  },
};

export default config;
