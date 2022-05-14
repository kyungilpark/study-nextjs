import fetch from "isomorphic-unfetch";
import css from "styled-jsx/css";
import { useEffect } from "react";
import Profile from "../../components/Profile";
import Repositories from "../../components/Repositories";

const style = css`
.user-contents-wrapper {
    display: flex;
    padding: 20px;
}
`;

const name = ({ user, repos }) => {
  // useEffect(() => {
  //   throw Error();
  // }, []);

  return (
    <div className="user-contents-wrapper">
      <Profile user={user} />
      <Repositories user={user} repos={repos} />
      <style jsx>{style}</style>
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  console.log("getServerSideProps");
  const { name, page } = query;
  try {
    let user;
    let repos;

    const userRes = await fetch(`https://api.github.com/users/${name}`);
    if (userRes.status === 200) {
      user = await userRes.json();
    }
    const repoRes = await fetch(`https://api.github.com/users/${name}/repos?sort=update&page=${page}&per_page=10`);
    if (repoRes.status === 200) {
      repos = await repoRes.json();
    }
    console.log(repos);
    return { props: { user, repos } };
  } catch (e) {
    console.log(e);
    return { props: {} };
  }
};

// name.getInitialProps = async ({ query }) => {
//   console.log("getInitialProps");
//   const { name } = query;
//   try {
//     const res = await fetch(`https://api.github.com/users/${name}`);
//     if (res.status === 200) {
//       const user = await res.json();
//       return { user };
//     }
//     return {};
//   } catch (e) {
//     console.log(e);
//     return {};
//   }
// };

export default name;
