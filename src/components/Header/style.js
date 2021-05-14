import styled from "@emotion/styled/macro";

export const CartIcon = styled.div`
  &:after {
    content: "";
    content: ${({ items }) => (items ? `'${items}'` : `'0'`)};
    top: -0.5rem;
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    right: -1rem;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    font-weight: bold;
  }
`;
