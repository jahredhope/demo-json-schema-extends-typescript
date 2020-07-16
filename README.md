# Demo json-schema-extends-typescript

This repository demonstrates the different behaviours between `allOf` and `extends` in generated types using json-schema-extends-typescript.

This repository contains folders with different implementations where multiple child schemas extend a parent schema. In this case the children `Circle` and `Square` both extend `Shape`.

Both of these folders have generated `types.d.ts` files with some differences.

- The use of `extend` creates the more ideal TypeScript definition however it duplicates the shape definition as `Shape` and `Shape1`.
- The use of `allOf` does not duplicate these definitions.

When using `allOf` reused references are declared once and reused.

- [Type definition example](./allOf/types.d.ts)
- [Source code](./allOf/square.json)

When using `extends` reused references are duplicated.

- [Type definition example](./extends/types.d.ts)
- [Source code](./extends/square.json)

### Setup

Install dependencies

```bash
$ yarn
```

Build the type definitions

```bash
$ yarn build
```
