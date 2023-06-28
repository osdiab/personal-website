# omardiab.com

This app uses [`turborepo`](https://turbo.build/repo) and a monorepo structure
to deploy a web app with a database and a Hasura GraphQL Engine instance. Each
package/app is 100% [TypeScript](https://www.typescriptlang.org/).

## Installation

1. [Install Docker](https://docs.docker.com/engine/install/)
1. [Install `asdf`](https://asdf-vm.com/guide/getting-started.html)
1. Install `asdf` plugins
   1. [nodejs](https://github.com/asdf-vm/asdf-nodejs#install)
   1. [hasura-cli](https://github.com/gurukulkarni/asdf-hasura#install)
   1. [doppler](https://github.com/takutakahashi/asdf-doppler#install)
   1. [act](https://github.com/grimoh/asdf-act#install)
   1. [pnpm](https://github.com/jonathanmorley/asdf-pnpm#installing)
1. Run `asdf install` to install system dependencies
1. Run `pnpm install` to install node dependencies
1. Run `pnpm setup:doppler` to set up Doppler to inject environment variables

## Run dev environment

```sh
pnpm dev
```

The web app will be accessible on http://localhost:3000

## What's inside?

### Apps and Packages

- Apps are in the `apps/` directory
  - `apps/web`: NextJS web app
  - `apps/gql-engine`: Hasura GraphQL Engine instance
- Scripts are in the `scripts/` directory
- Shared libraries are in the `libs/` directory
  - `libs/gql-web`: Auto-generated bindings to call the GraphQL engine generated
    by Hasura with TypeScript

### Style/Linting

These tools are used:

- [ESLint](https://eslint.org/) for code linting, run with
  [`jest-runner-eslint`](https://github.com/jest-community/jest-runner-eslint)
  for parallelism
- [Prettier](https://prettier.io) for code formatting

They are configured at the workspace root and run once across the whole repo.
Invoke them at the workspace root:

```sh
pnpm lint
pnpm lint:fix
pnpm format
pnpm format:check
```

### Type Checking

Each project has a `tsconfig.json`. Calling `pnpm typecheck` at the workspace
root runs type-checking on all subpackages.

### Build

To build the web app, run the following command:

```sh
pnpm build
```

## Deployments

### Architecture

- Web app is hosted on [Vercel](https://vercel.com/)
- Postgres database is hosted on [Neon](https://neon.tech/)
- Hasura GraphQL Engine is hosted on [Hasura Cloud](https://hasura.io/cloud/)
- Deploys are orchestrated with [Github
  Actions](https://github.com/features/actions)
  - We skip Vercel's build system altogether to gain more control over
    full-stack deployments and preview apps
  - See `.github/workflows/deploy.yml` for details
- Every pull request gets a full-stack preview environment, including:
  - A branch of the staging database
  - A Hasura Cloud preview app (currently not stable; may switch to Render)
  - A Vercel preview deploy configured to query the Hasura preview app
