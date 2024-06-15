# Nx Lerna Monorepo starter

Bootstrapped, ready-for-production (Mono-)Repository for TypeScript environments using NestJS + React.
This project was generated using [Nx](https://nx.dev).

🔎 **Smart, Extensible Build Framework**

## Installing Nestjs Module

Nestjs requires you to use the following command 

```
nx g @nx/nest:app nest-app
```

As soon as the installation is completed convert your 
eslint.config.js jest.preset.js in the root directory to use cjs extension

In the app directory update webpack.config.js and eslint.config.js to use the cjs extension 

If all the above have been adhered to your project should build with no errors