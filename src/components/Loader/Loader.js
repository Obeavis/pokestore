import React from "react";
import styled from "@emotion/styled/macro";

const Spinner = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  z-index: 99;

  .u-pulse {
    animation: pulse 1000ms infinite;
  }

  .o-pokeball {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    border: solid 2px black;
    position: relative;
    background: linear-gradient(to bottom, #eeeeee 0%, #ffffff 100%);
    margin: 10px auto;

    &:before,
    &:after {
      content: "";
      display: block;
    }

    &,
    &:before,
    &:after {
      transition: all 600ms cubic-bezier(0.67, 0.4, 0.36, 0.75);
    }

    &:before {
      width: 46px;
      height: 24px;
      border-bottom: solid 2px black;
      border-radius: 25px 25px 0 0;
      background: linear-gradient(to bottom, #d10000 0%, #ff0000 50%);
    }

    &:after {
      content: "";
      width: 10px;
      height: 10px;
      background: linear-gradient(to bottom, #fff 0%, #ccc 100%);
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      box-shadow: 0 0 0 1px black, 0 0 0 2px #ddd, 0 0 0 3.5714285714px black,
        0 0 5px 2.9411764706px rgba(0, 0, 0, 0.4);
    }
  }
`;

const Loader = () => (
  <Spinner>
    <div className="o-pokeball c-loader u-pulse"></div>
  </Spinner>
);

export default Loader;
