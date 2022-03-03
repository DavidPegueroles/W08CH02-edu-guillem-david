import { useEffect, useState } from "react";
import axios from "axios";

const NewTuit = () => {
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const initialData = {
    text: "",
  };

  const [tuitData, setTuitData] = useState(initialData);

  const changeData = (event) => {
    setTuitData({
      ...tuitData,
      [event.target.id]: event.target.value,
    });
  };
  const resetForm = () => {
    setTuitData(initialData);
  };
  useEffect(() => {
    setButtonDisabled(tuitData.text === "");
  }, [tuitData]);

  const onSubmit = (event) => {
    event.preventDefault();
    axios.post("https://tuitah-guillem-david.herokuapp.com/new", tuitData);
    resetForm();
  };

  return (
    <>
      <div className="create-form">
        <h2>Create a new Tuit</h2>
        <form onSubmit={onSubmit} autoComplete="off" noValidate>
          <textarea
            placeholder="Uwu...?"
            type="text"
            value={tuitData.text}
            className="form-control"
            id="text"
            onChange={changeData}
            maxLength={200}
          />
          <button
            type="submit"
            className="button-form"
            disabled={buttonDisabled}
          >
            Create
          </button>
        </form>
      </div>
    </>
  );
};

export default NewTuit;
