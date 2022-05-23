import { NextPage } from "next";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

const index: NextPage = () => {
  return (
    <Container>
      <h2>Hello Styled-components</h2>
      <h2>Hello Styled-components</h2>
      <h2>Hello Styled-components</h2>
      <ul>
        <li>Hello Styled-components</li>
      </ul>
      <p>Hello Styled-components</p>
      <span>Hello Styled-components</span>
    </Container>
  );
};

export default index;
