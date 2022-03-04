import axios from "axios";
import calculateTime from "../../utils/calculateTime";
import { useState } from "react";
import { useRouter } from "next/router";

const TuitComponent = ({ tuit, detailsPage }) => {
  const router = useRouter();

  const goToListPage = () => {
    router.push("/");
  };

  const goToDetailsPage = (id) => {
    router.push(`/${id}`);
  };

  const [isDeleted, setIsDeleted] = useState(false);

  const deleteTuit = async (id) => {
    await axios.delete(`${process.env.NEXT_PUBLIC_API}delete/${id}`);
    setIsDeleted(true);
  };

  const [isFaved, setIsFaved] = useState(false);

  const favATuit = async (id) => {
    await fetch(`${process.env.NEXT_PUBLIC_API}like/${id}`, {
      method: "PATCH",
    });
    setIsFaved(true);
  };

  const doNothing = () => {};

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
            <span
              className={isFaved ? "liked" : ""}
              onClick={
                !isFaved
                  ? () => {
                      favATuit(tuit.id);
                    }
                  : () => {
                      doNothing();
                    }
              }
            >
              {!isFaved ? "♡" : "♥"}
            </span>{" "}
            {tuit.likes}
          </li>
          <li>{calculateTime(tuit.date)}</li>

          <button
            className={isDeleted ? "delete deleted" : "delete"}
            onClick={
              !isDeleted
                ? () => {
                    deleteTuit(tuit.id);
                  }
                : () => {
                    doNothing();
                  }
            }
          >
            ✘
          </button>
        </div>
      </ul>

      <div className="separator"></div>

      {detailsPage && (
        <button
          onClick={() => {
            goToListPage();
          }}
        >
          Back
        </button>
      )}
    </li>
  );
};

export default TuitComponent;
