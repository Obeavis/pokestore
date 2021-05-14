import styled from "@emotion/styled/macro";

export const List = styled.div`
  .poke {
    &:hover {
      .btn-buy {
        top: 0px !important;
      }
    }
  }

  .btn-buy {
    position: absolute;
    transition: all 0.15s ease 0s;
    outline: none !important;
  }
`;

export const StyledPagination = styled.div`
  .pagination {
    display: inline-block;
    padding-left: 0;
    margin: 0;
    border-radius: 1rem;

    > li {
      display: inline;
      > a,
      > span {
        position: relative;
        float: left;
        padding: 1rem;
        margin-left: -1px;
        line-height: 1rem;
        text-decoration: none;
        background-color: white;
        border: 1px solid #ddd;
        font-weight: 300;
      }
      &:first-of-type {
        > a,
        > span {
          margin-left: 0;
        }
      }
      &:last-child {
        > a,
        > span {
        }
      }
    }

    .active {
      a {
        font-weight: bold;
      }
    }

    > .disabled {
      > span,
      > span:hover,
      > span:focus,
      > a,
      > a:hover,
      > a:focus {
        color: #999999;
        cursor: default;
        background-color: #f1f1f1;
        border-color: #e5e5e5;
      }
    }
  }

  @media (min-width: 768px) {
    .pagination {
      > li {
        > a,
        > span {
          padding: 1.2rem;
        }
      }
    }
  }
`;
