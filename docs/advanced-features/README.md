# Nextjs - Docs - Advanced Features
https://nextjs.org/docs

## Static HTML Export
- https://github.com/vercel/next.js/tree/canary/examples/with-static-export

`next export` 를 사용해서 node 서버 없이도 독립적으로 실행되는 static HTML 으로 내보낼 수 있다.  
단, 서버를 필요로 하는 `unsupported features` 를 사용하지 않는 경우에만 사용하길 권장한다.

### `next export`
```json
"scripts": {
    "build": "next build && next export"
}
```

`npm run build` 를 실행하면 `out` 디렉토리가 생성된다.
- `next build` 단계에서 `getStaticProps` 와 `getStaticPaths` 에 의해 `pages` 디렉토리에 각 페이지 HTML 파일을 생성합니다.
- `next export`단계에서 `getInitialProps` 에 의해 HTML 파일을 생성합니다.

고급 시나리오의 경우 `next.config.js` 파일에 `exportPathMap` 이라는 매개 변수를 정의하여 생성할 페이지를 정확하게 구성할 수 있습니다.

### Supported Features
- [Dynamic Routes when using `getStaticPaths`](https://nextjs.org/docs/routing/dynamic-routes)
- Prefetching with `next/link`
- Preloading JavaScript
- [Dynamic Imports](https://nextjs.org/docs/advanced-features/dynamic-import)
- Any styling options (e.g. CSS Modules, styled-jsx)
- [Client-side data fetching](https://nextjs.org/docs/basic-features/data-fetching/client-side)
- [`getStaticProps`](https://nextjs.org/docs/basic-features/data-fetching/get-static-props)
- [`getStaticPaths`](https://nextjs.org/docs/basic-features/data-fetching/get-static-paths)
- [Image Optimization](https://nextjs.org/docs/basic-features/image-optimization) using a [custom loader](https://nextjs.org/docs/basic-features/image-optimization#loader)

### Unsupported Features
- [Image Optimization](https://nextjs.org/docs/basic-features/image-optimization) (default loader)
- [Internationalized Routing](https://nextjs.org/docs/advanced-features/i18n-routing)
- [API Routes](https://nextjs.org/docs/api-routes/introduction)
- [Rewrites](https://nextjs.org/docs/api-reference/next.config.js/rewrites)
- [Redirects](https://nextjs.org/docs/api-reference/next.config.js/redirects)
- [Headers](https://nextjs.org/docs/api-reference/next.config.js/headers)
- [Middleware](https://nextjs.org/docs/middleware)
- [Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration)
- [`fallback: true`](https://nextjs.org/docs/api-reference/data-fetching/get-static-paths#fallback-true)
- [`getServerSideProps`](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props)

### `getInitialProps`
`getStaticProps` 대신 `getInitialProps` API를 사용할 수 있지만 주의 사항이 있습니다.
- `getInitialProps` 는 지정된 페이지에서 `getStaticProps` 또는 `getStaticPaths` 와 함께 사용할 수 없습니다. 동적 경로가 있는 경우 `getStaticPaths` 대신 `next.config.js` 파일의 `exportPathMap` 매개 변수를 구성하여 내보내기 위해 출력해야 하는 HTML 파일을 알려야 합니다.
- 내보내기 중에 `getInitialProps` 가 호출되면 내보내기 중에는 서버가 실행되지 않으므로 `context` 매개 변수의 `req` 및 `res` 필드는 빈 개체가 됩니다.
- `getInitialProps` **는 모든 클라이언트 측 탐색에서 호출됩니다**. 빌드 시에만 데이터를 가져오려면 `getStaticProps` 로 전환하십시오.
- `getInitialProps` 는 API에서 가져와야 하며 node.js 라이브러리나 파일 시스템을 사용할 수 없습니다.

가능하면 `getInitialProps` 보다 `getStaticProps` 로 마이그레이션하는 것을 권장합니다.

## Absolute Imports and Module path aliases
- https://github.com/vercel/next.js/tree/canary/examples/with-absolute-imports

Next.js 는 자동으로 `tsconfig.json` 및 `jsconfig.json` 에서 `"paths"` 및 `"baseUrl"` 옵션을 지원합니다.

> Note: jsconfig.json can be used when you don't use TypeScript

> Note: tsconfig.json / jsconfig.json 변경사항 반영을 위해선 서버를 재시작해야 합니다.

이러한 옵션을 사용하면 모듈 별칭을 구성할 수 있습니다. 예를 들어, 일반적인 패턴은 특정 디렉터리에 절대 경로를 사용하도록 별칭을 지정하는 것입니다.

이러한 옵션의 유용한 기능 중 하나는 vscode와 같은 특정 편집기에 자동으로 통합된다는 것입니다.

baseUrl 구성 옵션을 사용하면 프로젝트의 루트에서 직접 가져올 수 있습니다.

```json
// tsconfig.json or jsconfig.json
{
  "compilerOptions": {
    "baseUrl": "."
  }
}
```

```js
// components/button.js
export default function Button() {
  return <button>Click me</button>
}
```

```js
// pages/index.js
import Button from 'components/button'

export default function HomePage() {
  return (
    <>
      <h1>Hello World</h1>
      <Button />
    </>
  )
}
```

`baseUrl` 이 유용하지만 1 대 1과 일치하지 않는 다른 별칭을 추가할 수도 있습니다. 이 TypeScript 에는 `"paths"` 옵션이 있습니다.

`"paths"` 를 사용하면 모듈 별칭을 구성할 수 있습니다. 예를 들어 `@/components/*` to `components/*` 와 같습니다.

```json
// tsconfig.json or jsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/components/*": ["components/*"]
    }
  }
}
```

```js
// components/button.js
export default function Button() {
  return <button>Click me</button>
}
```

```js
// pages/index.js
import Button from '@/components/button'

export default function HomePage() {
  return (
    <>
      <h1>Hello World</h1>
      <Button />
    </>
  )
}
```