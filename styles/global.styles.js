import styled from "styled-components";

const Main = styled.main`
  header {
    h1 {
      font-size: 55px;
      font-family: "Hubballi", cursive;
      margin: 50px;
      margin-bottom: 0;
    }
  }

  h2 {
    font-size: 30px;
    font-family: "Hubballi", cursive;
    margin: 50px;
    margin-bottom: 0;
  }

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    .feed {
      display: flex;
      flex-direction: column-reverse;
      list-style: none;

      padding: 0;
      margin: 30px 10px;

      width: 75vw;

      .tuit {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .tuit-body {
          list-style: none;

          padding: 20px;
          margin: 30px;
          margin-top: 0;
          margin-bottom: 35px;

          width: 100%;

          .tuit-text {
            font-size: 30px;
            font-style: italic;

            cursor: pointer;
          }

          .stats {
            display: flex;
            justify-content: space-between;
            align-items: center;

            margin-top: 10px;

            .favourite {
              display: flex;
              justify-content: flex-start;
              align-items: center;

              span {
                color: pink;
                font-size: 25px;
                margin-right: 5px;
                cursor: pointer;
              }

              .liked {
                cursor: default;
              }
            }
          }
        }

        .separator {
          width: 80vw;
          height: 0;

          border-bottom: 1px solid #2d3752;
          margin-bottom: 35px;
        }

        button {
          background-color: transparent;
          color: white;
          font-size: 40px;
          font-family: "Hubballi", cursive;

          &:active {
            color: pink;
          }
        }

        .delete {
          border: none;
          color: red;

          position: absolute;
          left: 3vw;
          margin-bottom: 60px;
        }

        .deleted {
          display: none;
        }
      }
    }
  }
`;

export default Main;
