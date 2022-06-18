# Nextjs - Learn
https://nextjs.org/learn

## CREATE YOUR FIRST APP
### Create a Next.js App
리액트로 완전한 웹애플리케이션을 구축하려면 고려해랴 할 중요한 세부 사항이 많습니다:
- 코드는 웹팩 같은 번들러로 번들링해야 하며 바벨 같은 컴파일러로 변환되어야 한다.
- 코드분할 같은 프러덕션 최적화를 수행해야 한다.
- 성능 및 SEO 를 위해 일부 페이지를 정적으로 사전 렌더링하고 싶을 수 있다. 서버렌더링이나 클라이언트렌더링을 사용하고 싶을 수도 있다.
- 리액트 앱을 데이터저장소에 연결하기 위해 서버측 코드를 작성해야 할 수도 있다.

프레임워크는 이러한 문제들을 해결할 수 있다. 그러나 이러한 프레임워크는 적절한 수준의 추상화가 있어야 합니다. 그렇지 않으면 그다지 유용하지 않을 것입니다. 또한 사용자와 팀이 코드를 작성하는 동안 놀라운 경험을 할 수 있도록 "개발자 경험"이 필요합니다.

**Next.js: The React Framework**

리액트 프레임워크인 Next.js로 둘어가보자. Next.js는 위의 모든 문제에 대한 해결책을 제공합니다. 그러나 더 중요한 것은 React 애플리케이션을 구축할 때 사용자와 팀을 성공의 구렁텅이 ([pit of success](https://blog.codinghorror.com/falling-into-the-pit-of-success/)) 에 빠뜨린다는 점입니다.

Next.js는 동급 최고의 개발자 경험과 다음과 같은 많은 기본 제공 기능을 갖는 것을 목표로 한다.
- 직관적인 페이지 기반 라우팅 시스템(동적 경로 지원 포함)
- 사전 렌더링, 정적 생성(SSG) 및 서버 측 렌더링(SSR) 모두 페이지 단위로 지원
- 더 빠른 페이지 로드를 위한 자동 코드 분할
- 최적화된 프리페치를 통한 클라이언트 측 라우팅
- 내장 CSS 및 Sass 지원 및 모든 CSS-in-JS 라이브러리 지원
- 빠른 업데이트/교체(Fast Refresh)를 지원하는 개발 환경
- 서버리스 함수를 사용하여 API 엔드포인트를 구축하기 위한 API 라우팅
- 완전 확장 가능

Next.js는 전 세계에서 가장 큰 브랜드를 포함하여 수만 개의 프로덕션 웹 사이트와 웹 응용 프로그램에 사용됩니다.

**About This Tutorial**

이 무료 대화형 과정은 Next.js를 시작하는 방법을 안내합니다.

이 튜토리얼에서는 매우 간단한 블로그 앱을 만들어 Next.js 기본 사항에 대해 배울 것입니다. 다음은 최종 결과의 예입니다.

https://next-learn-starter.vercel.app/ ([source](https://github.com/vercel/next-learn/tree/master/basics/demo))

> 이 튜토리얼에서는 JavaScript 및 React에 대한 기본 지식을 가정합니다. 리액트 코드를 작성한 적이 없다면 공식 리액트 튜토리얼을 먼저 거쳐야 한다.
> 대신 설명서를 찾으려면 Next.js 설명서를 참조하십시오.

#### Setup
**Create a Next.js app**
```shell
$ npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
$ cd nextjs-blog
$ npm run dev
```
Open http://localhost:3000

#### Welcome to Next.js
Let’s try to edit this page next!

#### Editing the Page
Let’s try editing the starter page.
- Make sure the Next.js development server is still running.
- Open pages/index.js with your text editor.
- Find the text that says “Welcome to” under the <h1> tag and change it to “Learn”.
- Save the file.

Next.js 개발 서버에서 빠른 새로 고침을 사용하도록 설정했습니다. 파일을 변경하면 Next.js는 브라우저의 변경 내용을 거의 즉시 자동으로 적용합니다. 새로 고침이 필요 없음! 이렇게 하면 앱에서 빠르게 반복할 수 있습니다.

**Next Up: Creating Pages**

다음 단원에서는 더 많은 페이지를 만들고 페이지 사이를 탐색하는 방법에 대해 설명합니다.

> 개발 서버를 계속 실행해야 하지만 다시 시작하려면 Ctrl + c를 눌러 서버를 중지하십시오.

### Navigate Between Pages
- 통합 파일 시스템 라우팅을 사용하여 새 페이지를 만듭니다.
- Link 구성 요소를 사용하여 페이지 간 클라이언트 측 탐색을 활성화하는 방법에 대해 알아봅니다.
- 코드 분할 및 프리페치에 대한 기본 제공 지원에 대해 알아봅니다.

#### Pages in Next.js
Next.js에서 페이지는 pages 디렉토리의 파일에서 내보낸 리액트컴포넌트입니다.

페이지는 파일 이름에 따라 라우트와 연결됩니다. 예를 들어:
- pages/index.js is associated with the / route.
- pages/posts/first-post.js is associated with the /posts/first-post route.

**Create a New Page**

pages/posts/first-post.js
```javascript
export default function FirstPost() {
  return <h1>First Post</h1>;
}
```
http://localhost:3000/posts/first-post 에서 확인

#### Link Component
**Using `<Link>`**

pages/index.js
```jsx
import Link from 'next/link';

// ...
<h1 className="title">
  Read{' '}
  <Link href="/posts/first-post">
    <a>this page!</a>
  </Link>
</h1>
```
> `{' '}` adds an empty space, which is used to divide text over multiple lines.

pages/posts/first-post.js
```jsx
import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
```

#### Client-Side Navigation

### Assets, Metadata, and CSS
- 정적 파일(이미지 등)을 Next.js에 추가하는 방법.
- 각 페이지에 대해 `<head>`에 들어갈 내용을 사용자 지정하는 방법.
- CSS 모듈을 사용하여 스타일링된 재사용 가능한 리액트 컴포넌트를 만드는 방법.
- `pages/_app.js`에 글로벌 CSS를 추가하는 방법.
- Next.js에서 스타일링을 위한 유용한 팁

#### Assets
**Unoptimized Image**
```html
<img src="/images/profile.jpg" alt="Your Name" />
```
**Image Component and Image Optimization**

**Using the Image Component**
```jsx
import Image from 'next/image';

const YourComponent = () => (
  <Image
    src="/images/profile.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
);
```

#### Metadata
**Adding Head to first-post.js**
```jsx
import Head from 'next/head';

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </>
    );
}
```

> To learn more about the Head component, check out the API reference for next/head.
> If you want to customize the `<html>` tag, for example to add the `lang` attribute, you can do so by creating a `pages/_document.js` file. Learn more in the custom Document documentation.

#### Third-Party JavaScript
**Adding Third-Party JavaScript**
```jsx
<Head>
  <title>First Post</title>
  <script src="https://connect.facebook.net/en_US/sdk.js" />
</Head>
```

**Using the Script Component**
```jsx
import Script from 'next/script';

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </>
    );
}
```

#### CSS Styling
```jsx
<style jsx>{`
  …
`}</style>
```
**Writing and Importing CSS**

#### Layout Component
**Adding CSS**
`components/layout.module.css`
```css
.container {
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
}
```
> Important: To use CSS Modules, the CSS file name must end with `.module.css`.

`components/layout.js`
```jsx
import styles from './layout.module.css';

export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>;
}
```

**Automatically Generates Unique Class Names**

#### Global Styles
`pages/_app.js`
```jsx
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

**Restart the Development Server**

**Adding Global CSS**
`styles/global.css`
```css
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  line-height: 1.6;
  font-size: 18px;
}

* {
  box-sizing: border-box;
}

a {
  color: #0070f3;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

img {
  max-width: 100%;
  display: block;
}
```
`pages/_app.js`
```jsx
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

> **If it didn’t work**: Make sure you restart the development server when you add `pages/_app.js`.

#### Polishing Layout
**Update `components/layout.module.css`**
```css
.container {
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.backToHome {
  margin: 3rem 0 0;
}
```

**Create `styles/utils.module.css`**
```css
.heading2Xl {
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
}

.headingXl {
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
}

.headingLg {
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 1rem 0;
}

.headingMd {
  font-size: 1.2rem;
  line-height: 1.5;
}

.borderCircle {
  border-radius: 9999px;
}

.colorInherit {
  color: inherit;
}

.padding1px {
  padding-top: 1px;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.listItem {
  margin: 0 0 1.25rem;
}

.lightText {
  color: #666;
}
```

**Update `components/layout.js`**
```jsx
import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Your Name';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
```

**Update `pages/index.js`**
```jsx
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
```

#### Styling Tips
**Using `classnames` library to toggle classes**
`alert.module.css`
```css
.success {
  color: green;
}
.error {
  color: red;
}
```
`alert.js`
```jsx
import styles from './alert.module.css';
import cn from 'classnames';

export default function Alert({ children, type }) {
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}
    >
      {children}
    </div>
  );
}
```

**Customizing PostCSS Config**
```shell
$ npm install -D tailwindcss autoprefixer postcss
```

```js
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```
```js
// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // For the best performance and to avoid false positives,
    // be as specific as possible with your content configuration.
  ],
};
```

> To learn more about custom PostCSS configuration, check out the documentation for PostCSS.
> To easily get started with Tailwind CSS, check out our example.

**Using Sass**
Before you can use Next.js' built-in Sass support, be sure to install `sass`:
```shell
$ npm install -D sass
```

### Pre-rendering and Data Fetching
- Next.js의 사전 렌더링 기능
- 사전 렌더링에는 정적 생성과 서버 측 렌더링의 두 가지 형식이 있습니다.
- 데이터가 있는 정적 생성 및 데이터가 없는 정적 생성.
- `getStaticProps` 와 외부 블로그 데이터를 인덱스 페이지로 가져오는 방법
- `getStaticProps` 에 대한 유용한 정보

#### Pre-rendering
데이터 가져오기에 대해 이야기하기 전에 Next.js: Pre-rendering의 가장 중요한 개념 중 하나에 대해 알아보겠습니다.

기본적으로 Next.js는 모든 페이지를 미리 렌더링합니다. 이것은 Next.js가 클라이언트측 JavaScript로 모든 작업을 수행하는 대신 각 페이지에 대한 HTML을 미리 생성한다는 것을 의미합니다. 사전 렌더링하면 성능과 SEO가 향상될 수 있습니다.

생성된 각 HTML은 해당 페이지에 필요한 최소한의 JavaScript 코드와 연결됩니다. 브라우저에 의해 페이지가 로드되면 자바스크립트 코드가 실행되어 페이지를 완전한 대화식으로 만듭니다. (이 과정을 hydration이라고 합니다.)

**Check That Pre-rendering Is Happening**
다음 단계를 수행하여 사전 렌더링 여부를 확인할 수 있습니다.
- Disable JavaScript in your browser (here’s how in Chrome) and…
- Try accessing this page (the final result of this tutorial).

> Note: You can also try the above steps on localhost, but CSS won’t be loaded if you disable JavaScript.

#### Two Forms of Pre-rendering
- Static Generation is the pre-rendering method that generates the HTML at build time. The pre-rendered HTML is then reused on each request.
- Server-side Rendering is the pre-rendering method that generates the HTML on each request.

> In development mode (when you run npm run dev or yarn dev), every page is pre-rendered on each request — even for pages that use Static Generation.

**Per-page Basis**

**When to Use Static Generation v.s. Server-side Rendering**

We recommend using Static Generation (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:
- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page ahead of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is not a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use Server-side Rendering. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate frequently updated data.

**We’ll Focus on Static Generation**

#### Static Generation with and without Data
**Static Generation with Data using `getStaticProps`**
- `getStaticProps` runs at build time in production, and…
- Inside the function, you can fetch external data and send it as props to the page.

```jsx
export default function Home(props) { ... }

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = ...

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: ...
  }
}
```

> **Note**: In development mode, `getStaticProps` runs on each request instead.

**Let’s Use `getStaticProps`**

#### Blog Data
- Create a new top-level directory called `posts` (this is not the same as pages/posts).
- Inside `posts`, create two files: `pre-rendering.md` and `ssg-ssr.md`.

```markdown
---
title: 'Two Forms of Pre-rendering'
date: '2020-01-01'
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
```
```markdown
---
title: 'When to Use Static Generation v.s. Server-side Rendering'
date: '2020-01-02'
---

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.
```

> You might have noticed that each markdown file has a metadata section at the top containing `title` and `date`. This is called YAML Front Matter, which can be parsed using a library called gray-matter.

**Parsing the Blog Data on `getStaticProps`**

#### Implement getStaticProps
```shell
$ npm install gray-matter
```
- Create a top-level directory called `lib`
- Inside `lib`, create a file called `posts.js` with the following content

```js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}
```

> **Note**: In Next.js, the `lib` folder does not have an assigned name like the `pages` folder, so you can name it anything. It's usually convention to use `lib` or `utils`.

`pages/index.js`
```jsx
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            {/* Keep the existing code here */}

            {/* Add this <section> tag below the existing <section> tag */}
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            {title}
                            <br />
                            {id}
                            <br />
                            {date}
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}
```

#### Pre-rendering and Data Fetching
**getStaticProps Details**
https://nextjs.org/docs/basic-features/data-fetching/overview#getstaticprops-static-generation

**Fetch External API or Query Database**
```js
export async function getSortedPostsData() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch('..');
  return res.json();
}
```
> **Note**: Next.js polyfills `fetch()` on both the client and server. You don't need to import it.

```js
import someDatabaseSDK from 'someDatabaseSDK'

const databaseClient = someDatabaseSDK.createClient(...)

export async function getSortedPostsData() {
  // Instead of the file system,
  // fetch post data from a database
  return databaseClient.query('SELECT posts...')
}
```

**Development vs. Production**
- In development (`npm run dev` or `yarn dev`), `getStaticProps` runs on every request.
- In production, `getStaticProps` runs at _build time_. However, this behavior can be enhanced using the `fallback` key returned by `getStaticPaths`

**Only Allowed in a Page**
`getStaticProps` can only be exported from a **page**. You can’t export it from non-page files.

One of the reasons for this restriction is that React needs to have all the required data before the page is rendered.

**What If I Need to Fetch Data at Request Time?**
In cases like this, you can try **Server-side Rendering** or skip pre-rendering. Let’s talk about these strategies before we move on to the next lesson.

#### Fetching Data at Request Time
To use Server-side Rendering, you need to export `getServerSideProps` instead of `getStaticProps` from your page.

**Using `getServerSideProps`**
```js
export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    },
  };
}
```

**Client-side Rendering**
If you **do not** need to pre-render the data, you can also use the following strategy (called Client-side Rendering):
- Statically generate (pre-render) parts of the page that do not require external data.
- When the page loads, fetch external data from the client using JavaScript and populate the remaining parts.

**SWR**
The team behind Next.js has created a React hook for data fetching called `SWR`. We highly recommend it if you’re fetching data on the client side. It handles caching, revalidation, focus tracking, refetching on interval, and more. We won’t cover the details here, but here’s an example usage:
```js
import useSWR from 'swr';

function Profile() {
  const { data, error } = useSWR('/api/user', fetch);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>hello {data.name}!</div>;
}
```
https://swr.vercel.app/ko

### Dynamic Routes
- `getStaticPaths`를 사용하여 동적 경로가 있는 페이지를 정적으로 생성하는 방법.
- 각 블로그 게시물에 대한 데이터를 가져오기 위해 `getStaticProps`를 작성하는 방법.
- `remark`를 사용하여 마크다운을 렌더링하는 방법.
- 날짜 문자열을 예쁘게 인쇄하는 방법.
- 동적 경로가 있는 페이지에 연결하는 방법.
- 동적 경로에 대한 유용한 정보

#### Page Path Depends on External Data
**How to Statically Generate Pages with Dynamic Routes**

- We want each post to have the path `/posts/<id>`, where `<id>` is the name of the markdown file under the top-level `posts` directory.
- Since we have `ssg-ssr.md` and `pre-rendering.md`, we’d like the paths to be `/posts/ssg-ssr` and `/posts/pre-rendering`.

**Overview of the Steps**

#### Implement getStaticPaths
- Create a file called `[id].js` inside the `pages/posts` directory.
- Also, remove first-post.js inside the pages/posts directory — we’ll no longer use this.

#### Implement getStaticProps

#### Render Markdown
```shell
$ npm install remark remark-html
```

#### Dynamic Routes
**Adding `title` to the Post Page**

**Formatting the Date**
```shell
$ npm install date-fns
```

#### Polishing the Index Page

#### Dynamic Routes Details
**Dynamic Routes Details**
https://nextjs.org/docs/routing/dynamic-routes

**Fetch External API or Query Database**
Like `getStaticProps`, `getStaticPaths` can fetch data from any data source. In our example, `getAllPostIds` (which is used by `getStaticPaths`) may fetch from an external API endpoint:

**Development vs. Production**
- In **development** (`npm run dev` or `yarn dev`), `getStaticPaths` runs on every request.
- In **production**, `getStaticPaths` runs at build time.

**Fallback**
If `fallback` is `false`, then any paths not returned by `getStaticPaths` will result in a **404 page**.

If `fallback` is `true`, then the behavior of `getStaticProps` changes:
- The paths returned from `getStaticPaths` will be rendered to HTML at build time.
- The paths that have not been generated at build time will **not** result in a 404 page. Instead, Next.js will serve a “fallback” version of the page on the first request to such a path.
- In the background, Next.js will statically generate the requested path. Subsequent requests to the same path will serve the generated page, just like other pages pre-rendered at build time.

If `fallback` is `blocking`, then new paths will be server-side rendered with `getStaticProps`, and cached for future requests so it only happens once per path.

https://nextjs.org/docs/api-reference/data-fetching/get-static-paths#fallback-false

**Catch-all Routes**
Dynamic routes can be extended to catch all paths by adding three dots (`...`) inside the brackets. For example:
- `pages/posts/[...id].js` matches `/posts/a`, but also `/posts/a/b`, `/posts/a/b/c` and so on.

**Router**

**404 Pages**

**More Examples**

### API Routes
- How to create an API Route.
- Some useful information on API Routes.

#### Creating API Routes

#### API Routes Details
**API Routes Details**

https://nextjs.org/docs/api-routes/introduction

**Do Not Fetch an API Route from `getStaticProps` or `getStaticPaths`**

Here’s why: `getStaticProps` and `getStaticPaths` run only on the server-side and will never run on the client-side. Moreover, these functions will not be included in the JS bundle for the browser. That means you can write code such as direct database queries without sending them to browsers. Read the Writing Server-Side code documentation to learn more.

**A Good Use Case: Handling Form Input**

**Preview Mode**

**Dynamic API Routes**

### Deploying Your Next.js App
> **Pre-requisite**: You need to have a GitHub account for this lesson.

- How to deploy your Next.js app to Vercel.
- The DPS Workflow: Develop, Preview, and Ship.
- How to deploy your Next.js app to your own hosting provider.

#### Push to GitHub

#### Deploy to Vercel

