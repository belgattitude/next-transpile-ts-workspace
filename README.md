# NextJS monorepo tests

Experimenting with a monorepo setup for nextjs / typescript.

### Approach

- [x] Setup with [yarn workspace](./package.json).
- [x] Relies on NextJs 9.5.2 tsconfig baseUrl resolution improvements [#13542](https://github.com/vercel/next.js/pull/13542) 
      (rather than next-transpile-module, see this branch for [next-transpile-module](https://github.com/belgattitude/next-transpile-ts-workspace/tree/v1_with_transpile_modules))

### How to

- Declare your workspaces paths in [package.json](./package.json)
- Create a base [tsconfig.json](./tsconfig.json) at the root.
  Set `baseUrl` to '.' and define your dependencies in `paths`.
- Configure webpack in [next.config.js](./apps/web-app/next.config.js)

### Structure

```
.
├── apps
│   ├── web-app                 (NextJS application)
|   |   ├── src/
|   |   ├── next.config.js
|   |   ├── package.json
|   |   └── tsconfig.json       (extends base config)
├── packages
│   ├── bar                     Bar package, publishable with microbundle)
|   |   ├── src/
|   |   ├── package.json
|   |   └── tsconfig.json       (extends base config)
│   ├── foo 
|   |   ├── src/
|   |   ├── package.json
|   |   └── tsconfig.json       (extends base config)
├── package.json                (the workspace config)
├── tsconfig.json               (base typescript config)
└── vercel.json 
```

### Notes

#### Drawbacks

- Keep all deps at the same version. You will run into problem if one package depends a v1 version and another in a v2.
  (There's a script to check that `yarn deps:check`)
- You might have to create multiple tsconfig.json (i.e: tsconfig.dev.json, tsconfig.build.json...) if you 
  want to use a distributed package rather than transpiling. 

#### Advantages over next-transpile-modules

- Fast refresh works out of the box, see https://github.com/martpie/next-transpile-modules/issues/9 and `resolveSymlinks` that
  can help. 
- ts-jest should honour the config.

#### Interesting next steps:

- RFC: https://github.com/vercel/next.js/discussions/15327
- Vercel monorepo support: https://github.com/vercel/vercel/issues/3547#issuecomment-673687255