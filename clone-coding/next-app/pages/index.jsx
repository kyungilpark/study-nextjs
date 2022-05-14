// '/' 경로를 가지는 페이지
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

function Child() {
  return <a>Move to '/tomato'</a>;
}

// `onClick`, `href`, and `ref` need to be passed to the DOM element
// for proper handling
const MyButton = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      Move to '/tomato'
    </a>
  );
});

function App() {
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <div>
      <button type="button" onClick={() => router.push("/tomato")}>
        tomato로 가기
      </button>
      <p>이름</p>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: "12px" }}
      />
      <button type="button" onClick={() => router.push(`vegetable/${name}`)}>
        {name} 으로 가기
      </button>
      <h2>Link to 'tomato' Page</h2>
      <Link href="/tomato" passHref>
        <MyButton />
      </Link>
      <h2>Link to 'potato' Page</h2>
      <Link href="/vegetable/potato">
        <a>Move to '/vegetable/potato'</a>
      </Link>
      <div>
        <img src="/cube_01.png" alt="1" />
      </div>
    </div>
  );
}

export default App;
