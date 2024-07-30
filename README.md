# Monorepo template

## Start project

### Set environment variables

```bash
cp .env.example .env
```

### Set node version

```bash
nvm use
```

### Install dependencies

```bash
pnpm i
```

### Start supabase

Install and start supabase docker containers:
(Docker running is required)

```bash
supabase start
```

### Start Project

```bash
pnpm dev
```

Apps are launched on the following ports:

| App        | URL                                     |
| ---------- | --------------------------------------- |
| `@app/web` | [localhost:3000](http://localhost:3000) |
| `@app/api` | [localhost:3000](http://localhost:3333) |

### Set git hooks

```bash
pnpm prepare
```

## Storybook

```bash
pnpm storybook
```

## Reset project

Clean up all workspace

```bash
pnpm clean
```

## Packages and Apps

| App                  | Readme                             |
| -------------------- | ---------------------------------- |
| `@app/web`           | [README](apps/web/README.md)       |
| `@app/api`           | [README](apps/api/README.md)       |
| `@app/mobile`        | [README](apps/mobile/README.md)    |
| `@app/storybook`     | [README](apps/storybook/README.md) |
| `@app/e2e`           | [README](apps/e2e/README.md)       |
| `@package/ui`        | [README](packages/ui/README.md)    |
| `@package/theme`     | [README](packages/theme/README)    |
| `@package/dto`       | [README](packages/dto/README.md)   |
| `@package/i18n`      | [README](packages/i18n/README.md)  |
| `@package/utils`     | [README](packages/utils/README.md) |
| `@supabase/supabase` | [README](supabase/README.md)       |

## More documents

| Document                    | Readme                           |
| --------------------------- | -------------------------------- |
| Utils docs list (HU)        | [README](docs/index.md)          |
| Typescript foundations (HU) | [README](docs/ts-foundations.md) |
| React Utils (HU)            | [README](docs/react-utils.md)    |
| Supabase (HU)               | [README](docs/supabase.md)       |
| Nest CLI (HU)               | [README](docs/nest-cli.md)       |

## Naming conventions

If you create new workspace add `@app/` prefix in apps and `@package/` in package folder. The exceptions are `configs` workspaces.

## Snippets

This project uses project specific snippets:

| Snippet code | Name                       | Files   | Info                                       |
| ------------ | -------------------------- | ------- | ------------------------------------------ |
| `rfc`        | React functional component | `*.tsx` | The component name is from filename        |
| `npg`        | Next.js Page               | `*.tsx` | The component name is from filename        |
| `napi`       | Next.js Api                | `*.ts`  | Handler name: `${fileName}Handler`         |
| `story`      | Storybook story            | `*.tsx` | story name: `${parentDirName}/${fileName}` |
| `e2e`        | Cypress e2e test           | `*.ts`  |                                            |
