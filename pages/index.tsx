import React from "react";
import { NextPage } from "next";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

const index: NextPage = () => {
  return (
    <Container>
      <h1>hello Styled-component</h1>
      <h2>hello Styled-component</h2>
    </Container>
  );
};

export default index;
