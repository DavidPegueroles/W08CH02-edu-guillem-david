import router from "next/router";
import axios from "axios";
import calculateTime from "../../utils/calculateTime";

const TuitComponent = ({ tuit }) => {
  const goToDetailsPage = (id) => {
    router.push(`/${id}`);
  };

  const deleteTuit = async (id) => {
    await axios.delete(`${process.env.NEXT_PUBLIC_API}delete/${id}`);
  };

  return (
    <li key={tuit.id} title="tuit" className="tuit">
      <ul className="tuit-body">
        <li
          className="tuit-text"
          onClick={() => {
            goToDetailsPage(tuit.id);
          }}
        >
          {tuit.text}
        </li>
        <div className="stats">
          <li className="favourite">
            <span>♡</span> {tuit.likes}
          </li>
          <li>{calculateTime(tuit.date)}</li>

          <button
            onClick={() => {
              deleteTuit(tuit.id);
            }}
          >
            DELETE
          </button>
        </div>
      </ul>

      <div className="separator"></div>
    </li>
  );
};

export default TuitComponent;
