import router from "next/router";
import NewTuit from "../components/NewTuit";
import Main from "../styles/global.styles";
import calculateTime from "../utils/calculateTime";
import { useState } from "react";

const Home = ({ tuits }) => {
  const goToDetailsPage = (id) => {
    router.push(`/${id}`);
  };

  const deleteTuit = async (id) => {
    await axios.delete(
      `https://tuitah-guillem-david.herokuapp.com/delete${id}`
    );
  };

  return (
    <>
      <Main>
        <header>
          <h1>Tuitah</h1>
        </header>
        <NewTuit />
        <section>
          <ul className="feed">
            {tuits &&

              tuits
                .sort((a, b) => new Date(a.date) - new Date(b.date))
                .map((tuit) => (
                  <li
                    key={tuit.id}
                    title="tuit"
                    className="tuit"
                    onClick={() => {
                      goToDetailsPage(tuit.id);
                    }}
                  >
                    <ul className="tuit-body">
                      <li className="tuit-text">{tuit.text}</li>
                      <div className="stats">
                        <li className="favourite">
                          <span>♡</span> {tuit.likes}
                        </li>
                        <li>{calculateTime(tuit.date)}</li>
                         <button onClick={() => deleteTuit(tuit.id)}>
                        DELETE
                      </button>
                      </div>
                             
                    </ul>


                    <div className="separator"></div>
                  </li>
                ))}
          </ul>
        </section>
      </Main>
    </>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}list`);
  const tuits = await response.json();

  return {
    props: { tuits: tuits.tuits },
  };
};

export default Home;
