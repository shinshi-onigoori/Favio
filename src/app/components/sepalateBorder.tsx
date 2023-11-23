"use client";

import React from "react";
import styled from "styled-components";

const SepalateBorder = () => {
  return (
    <SepalateBorderBlock>
      <Border></Border>
    </SepalateBorderBlock>
  );
};

const SepalateBorderBlock = styled.div`
  width: 100%;
`;

const Border = styled.div`
  margin: 10px 30px;
  border-radius: 10px;
  border: 2px solid #e4e4e4;
`;

export default SepalateBorder;
