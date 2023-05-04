import { useEffect, useState } from "react";
import { fetchImages } from "../Apicalls";
import { useDispatch } from "react-redux";
import { setImages, setErrorMessage } from "../../app/rootSlice";
import "./Form.css";

function Form({ rover }) {
  const dispatch = useDispatch();
  const [date, setDate] = useState("");
  const [sol, setSol] = useState("");
  const [camera, setCamera] = useState("");
  let maxSols;
  let maxDate;
  let minDate;
  let cameraOptions = [];

  if (rover) {
    maxSols = rover.max_sol;
    maxDate = rover.max_date;
    minDate = rover.landing_date;
    cameraOptions = rover.cameras.map(camera => <option value={camera.name} key={camera.name}>{camera.full_name}</option>)
  }

  const dateType = date ? "earth_date" : "sol";
  const dateQuery = sol || date;

  const fetchData = async (event) => {
    event.preventDefault();
    if(date || sol) {
      const roverPhotos = await fetchImages(
        dateType,
        rover.name,
        dateQuery,
        camera
      );
      if (roverPhotos instanceof Error) {
        dispatch(setErrorMessage(roverPhotos.toString()));
      } else {
        dispatch(setErrorMessage(""));
        dispatch(setImages(roverPhotos.photos));
        roverPhotos.photos.length
          ? dispatch(setErrorMessage(""))
          : dispatch(setErrorMessage("No Photos Found"));
      }
    }
  };

  useEffect(() => {
    return () => {
      dispatch(setImages([]));
      dispatch(setErrorMessage(""));
    };
  }, [dispatch]);

  return (
    <form>
      <div className="input-parent">
        <label>Mars Sol</label>
        <input
          className="sol"
          name="sol"
          type="number"
          min="0"
          max={maxSols}
          placeholder={"Select Sol"}
          value={sol}
          onChange={(event) => {
            setSol(event.target.value);
            setDate("");
          }}
        />
      </div>
      <div className="input-parent">
        <label>Earth Date</label>
        <input
          name="earth-date"
          type="date"
          min={minDate}
          max={maxDate}
          value={date}
          onChange={(event) => {
            setDate(event.target.value);
            setSol("");
          }}
        />
      </div>
      <div className="input-parent">
        <label>Rover Cam</label>
        <select value={camera} name="cam-select" onChange={e => setCamera(e.target.value)}>
          <option value="">Any Camera</option>
          {cameraOptions}
        </select>
      </div>
      <button disabled={!(sol || date)} className="submit-button" onClick={fetchData}>Get Photos</button>
    </form>
  );
}

export default Form;
