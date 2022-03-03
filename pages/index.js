import NewTuit from "../components/NewTwit/NewTuit";
import TuitComponent from "../components/TuitComponent/TuitComponent";
import Main from "../styles/global.styles";

const Home = ({ tuits }) => {
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
                .map((tuit) => <TuitComponent key={tuit.id} tuit={tuit} />)}
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
