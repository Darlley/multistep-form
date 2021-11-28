import styled from "styled-components";

export const Container = styled.div`
  p{
    font-size: 13px;
    color: #B8B8D4;
  }
  h1{
    margin: 0;
    padding: 0;
    font-size: 26px;
  }
  hr{
    height: 1px;
    border: 0;
    background-color: #16195C;
    margin: 30px 0;
  }

  label{
    font-size: 13px;
    cursor: text;

    input{
      display: block;
      margin-top: 7px;
      box-sizing: border-box;
      width: 100%;
      padding: 20px 10px;
      border: 2px solid #25CD89;
      color: #fff;
      font-size: 15px;
      border-radius: 6px;
      background-color: #02044A;
    }
  }

  button{
    background-color:  #25CD89;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    padding: 20px 40px;
    border-radius: 30px;
    cursor: pointer;
    border: none;
    margin-top: 30px;
  }
  button:hover{
    background-color: #1faf75;
    transform: scale(1.025, 1.025);
  }
`;