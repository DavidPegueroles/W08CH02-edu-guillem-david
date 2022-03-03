import router from "next/router";
import Main from "../styles/global.styles";
import calculateTime from "../utils/calculateTime";

const Home = ({ tuits }) => {
  const goToDetailsPage = (id) => {
    router.push(`/${id}`);
  };

  return (
    <>
      <Main>
        <header>
          <h1>Tuitah</h1>
        </header>

        <section>
          <ul className="feed">
            {tuits &&
              tuits.map((tuit) => (
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
