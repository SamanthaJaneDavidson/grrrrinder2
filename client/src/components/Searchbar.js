import React from "react";

function SearchBar(props) {
  return (
    <div>
      <div className="input-group mb-3">
        <input
          id="zip-code-search"
          className="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={props.handleChange}
          type="zip"
          name="zip"
          placeholder="* zip code required *"
        />
      </div>
      <div id="checkbox-container">
        <h5>Dog Gender</h5>
        <div className="form-check form-check-inline">
          <input
            className="checkmark form-check-input"
            type="checkbox"
            checked
            id="dog_gender"
            name="gender"
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="dog_gender">
            Male
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="checkmark form-check-input"
            type="checkbox"
            name="gender"
            id="female"
            checked
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="female">
            Female
          </label>
        </div>
        
        <h5>Health Status</h5>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="novax"
            name="vaccinated"
            checked
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="novax">
            Not Vaccinated
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            id="hasvax"
            name="vaccinated"
            checked
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="hasvax">
            Vaccinated
          </label>
        </div>
        <h5>Neutered/Spayed</h5>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="noneut"
            name="dog_neuter_spayed"
            checked
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="noneut">
            Not Neutered or Spayed
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            id="isneut"
            name="dog_neuter_spayed"
            checked
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="isneut">
            Neutered or Spayed
          </label>
        </div>
        
        <h5>Dog Size</h5>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="sizesmall"
            name="size"
            checked
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="sizesmall">
            Small
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="sizemedium"
            name="size"
            checked
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="sizemedium">
            Medium
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            name="size"
            id="sizelarge"
            checked
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="sizelarge">
            Large
          </label>
        </div>
        
        <h5>Dog Age</h5>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            name="age"
            id="agepup"
            checked
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="agepup">
            Puppy
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="ageyouth"
            name="age"
            checked
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="ageyouth">
            Youth
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="ageadult"
            checked
            onChange={props.handleChange}
            name="age"
          />
          <label className="form-check-label" htmlFor="ageadult">
            Adult
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="agesenior"
            name="age"
            checked
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="agesenior">
            Senior
          </label>
        </div>
        <h5>Dog Temperment</h5>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="shy"
            name="temperment"
            checked
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="shy">
            Shy
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="calm"
            name="temperment"
            checked
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="calm">
            Calm
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            name="temperment"
            className="form-check-input"
            type="checkbox"
            id="energetic"
            checked
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="energetic">
            Energetic
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            name="temperment"
            className="form-check-input"
            type="checkbox"
            id="outgoing"
            checked
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="outgoing">
            Outgoing
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            name="temperment"
            className="form-check-input"
            type="checkbox"
            id="leader"
            checked
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="leader">
            Leader
          </label>
        </div>
        <h5>Preferred Day</h5>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            name="days"
            id="mon"
            checked
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="mon">
            Monday
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            name="days"
            id="tue"
            checked
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="tue">
            Tuesday
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            name="days"
            id="wed"
            checked
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="wed">
            Wednesday
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            name="days"
            id="thu"
            checked
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="thu">
            Thursday
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            name="days"
            id="fri"
            checked
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="fri">
            Friday
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            name="days"
            id="sat"
            checked
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="sat">
            Saturday
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            name="days"
            id="sun"
            checked
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="sun">
            Sunday
          </label>
        </div>
        <h5>Preferred Time of Day</h5>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="morning"
            name="time"
            checked
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="morning">
            Morning
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            name="time"
            id="afternoon"
            checked
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="afternoon">
            Afternoon
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            name="time"
            id="evening"
            checked
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="evening">
            Evening
          </label>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
