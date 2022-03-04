import { useRouter } from "next/router";
import Main from "../styles/global.styles";
import calculateTime from "../utils/calculateTime";

const Tuit = ({ tuit }) => {
  const router = useRouter();

  const goToListPage = () => {
    router.push("/");
  };

  return (
    <Main>
      <header>
        <h1>Tuitah</h1>
      </header>
      {router.isFallback ? (
        <h2>Loading</h2>
      ) : (
        <>
          <h2>Anonymouse tuit:</h2>

          <section>
            <ul className="feed">
              <li className="tuit">
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

                <button
                  onClick={() => {
                    goToListPage();
                  }}
                >
                  Back
                </button>
              </li>
            </ul>
          </section>
        </>
      )}
    </Main>
  );
};

export const getStaticPaths = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}list`);
  const { tuits } = await response.json();
  const paths = tuits.map((tuit) => ({
    params: { id: `${tuit.id}` },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}${params.id}`);
  const tuit = await response.json();

  return {
    props: {
      tuit: tuit.tuit,
    },
  };
};

export default Tuit;
