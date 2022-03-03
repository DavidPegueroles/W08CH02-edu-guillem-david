import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin: 40px 10vw;
  margin-bottom: 0;

  h2 {
    margin: 0;
    margin-bottom: 10px;
    padding: 0;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    textarea {
      width: 70vw;
      height: 80px;
      margin: 20px;
    }

    .button-form {
      background-color: transparent;
      color: white;
      border: 2px solid pink;
      border-radius: 10px;
      font-size: 30px;
      font-family: "Hubballi", cursive;
      margin-left: 20px;
      padding: 2px 10px;

      cursor: pointer;

      &:active {
        color: pink;
      }

      &:disabled {
        border: none;
        color: transparent;
      }
    }
  }
`;

export default Div;
