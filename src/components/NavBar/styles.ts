import styled from 'styled-components'

export const Background = styled.div`
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  background-color: #282a36;
  width: 100%;
  -webkit-box-shadow: 15px -16px 98px 3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 15px -16px 98px 3px rgba(0, 0, 0, 0.75);
  box-shadow: 15px -16px 98px 3px rgba(0, 0, 0, 0.75);
`

export const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
  }

  p {
    font-size: 35px;
    transition: ease 0.2s;
  }

  p:hover {
    cursor: pointer;
    color: #7c49a8;
  }

  li {
    font-size: 25px;
    margin-left: 25px;
    transition: all 0.2s linear;
    border-bottom: 2px solid transparent;
  }

  li:hover {
    cursor: pointer;
    color: #7c49a8;
    border-color: #7c49a8;
  }

  > svg {
    display: none;
  }

  @media (max-width: 750px) {
    > svg {
      display: block;
    }

    ul {
      display: none;
    }
  }
`
