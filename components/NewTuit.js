import { useEffect, useState } from "react";

const NewTuit = () => {};

const [buttonDisabled, setButtonDisabled] = useState(true);

const initialData = {
  text: "",
};

const [tuitData, settuitData] = useState(initialData);

const changeData = (event) => {
  settuitData({
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
  axios.post("https://tuitah-guillem-david.herokuapp.com/", tuitData);
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
        <button type="submit" className="button-form" disabled={buttonDisabled}>
          Create
        </button>
      </form>
    </div>
  </>
);

export default NewTuit;
