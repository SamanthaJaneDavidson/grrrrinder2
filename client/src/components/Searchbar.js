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
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="noneut">
            No
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            id="isneut"
            name="dog_neuter_spayed"
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="isneut">
            Yes
          </label>
        </div>
        
        <h5>Dog Size</h5>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="sizesmall"
            name="size"
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
