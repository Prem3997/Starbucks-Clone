import styled from "styled-components";

export default styled.div`
  height: 149px;
  width: 235px;
  color: #000;
  margin: 15px 15px;
  font-size: 4em;
  border-radius:10px;
  background: url(${({ src }) => src});
  background-size: contain;
  position: relative;
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: grey;
  box-shadow: 0px 7px 12px 0px rgba(0,0,0,0.75);
  -webkit-box-shadow: 0px 7px 12px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 7px 12px 0px rgba(0,0,0,0.75);

  &:hover {
    transform: translateY(-15px);
    transition: all 0.5s;
    cursor: pointer;
  }
`;