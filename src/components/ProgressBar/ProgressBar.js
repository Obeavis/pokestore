import React from "react";
import styled from "@emotion/styled/macro";

const ProgressBar = ({ progress, className }) => {
  const ContainerStyled = styled.div`
    width: 100%;
    background-color: #eaeaea;
    border-radius: 1rem;
    .progress-bar {
      width: ${({ progress }) => `${progress > 100 ? 100 : progress}%`};
      border-radius: 1rem;
      box-shadow: none;
      background: linear-gradient(
        to right,
        #e5405e 0%,
        #ffdb3a 45%,
        #3fffa2 100%
      );
    }
  `;

  return (
    <ContainerStyled progress={progress}>
      <div className={`progress-bar ${className}`}></div>
    </ContainerStyled>
  );
};

export default ProgressBar;
