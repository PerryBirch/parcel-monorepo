# Parcel Monorepo

A parcel based build system with out of the box support for the following technologies:

- JavaScript
- TypeScript
- SCSS
- Yarn Workspaces

## Get Started

1. Run `yarn` inside the project root
2. `cd` into the project you want to run and run `yarn start`

## How it works

The magic comes down to [parcel](https://parceljs.org/recipes.html).
Parcel is bundler just like Webpack, with a few core design differences:

- Zero Configuration, just include a file type and Parcel will figure out how to bundle it
- Very low configuration, very easy to maintain
- Language interoperability, Can include typescript files into javascript projects and vice versa
