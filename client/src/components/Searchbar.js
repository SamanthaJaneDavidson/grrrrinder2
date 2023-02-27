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
          onChange={props.handleSearchboxChange}
          type="zip"
          name="zip"
          placeholder="search by zip code"
        />
      </div>
      <div>
        <p>Dog Gender</p>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
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
            className="form-check-input"
            type="checkbox"
            name="gender"
            id="female"
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="female">
            Female
          </label>
        </div>
        
        <p>Health Status</p>
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
            id="inlineCheckbox3"
            name="vaccinated"
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="inlineCheckbox3">
            Vaccinated
          </label>
        </div>
        <p>Neutered/Spayed</p>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="noneut"
            name="dog_neuter_spayed"
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="noneut">
            Not Neutered or Spayed
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox4"
            name="dog_neuter_spayed"
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="inlineCheckbox4">
            Neutered or Spayed
          </label>
        </div>
        
        <p>Dog Size</p>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox5"
            name="size"
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="inlineCheckbox5">
            Small
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox6"
            name="size"
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="inlineCheckbox6">
            Medium
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            name="size"
            id="inlineCheckbox7"
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="inlineCheckbox7">
            Large
          </label>
        </div>
        
        <p>Dog Age</p>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            name="age"
            id="inlineCheckbox8"
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="inlineCheckbox8">
            Puppy
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox9"
            name="age"
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="inlineCheckbox9">
            Youth
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox10"
            onChange={props.handleChange}
            name="age"
          />
          <label className="form-check-label" htmlFor="inlineCheckbox10">
            Adult
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox11"
            name="age"
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="inlineCheckbox11">
            Senior
          </label>
        </div>
        <p>Dog Temperment</p>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox12"
            name="temperment"
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="inlineCheckbox12">
            Shy
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox13"
            name="temperment"
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="inlineCheckbox13">
            Calm
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            name="temperment"
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox14"
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="inlineCheckbox14">
            Energetic
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            name="temperment"
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox15"
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="inlineCheckbox15">
            Outgoing
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            name="temperment"
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox16"
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="inlineCheckbox16">
            Leader
          </label>
        </div>
        <p>Preferred Day</p>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            name="days"
            id="inlineCheckbox17"
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="inlineCheckbox17">
            Monday
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            name="days"
            id="inlineCheckbox18"
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="inlineCheckbox18">
            Tuesday
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            name="days"
            id="inlineCheckbox19"
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="inlineCheckbox19">
            Wednesday
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            name="days"
            id="inlineCheckbox20"
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="inlineCheckbox20">
            Thursday
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            name="days"
            id="inlineCheckbox21"
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="inlineCheckbox21">
            Friday
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            name="days"
            id="inlineCheckbox22"
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="inlineCheckbox22">
            Saturday
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            name="days"
            id="inlineCheckbox23"
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="inlineCheckbox23">
            Sunday
          </label>
        </div>
        <p>Preferred Time of Day</p>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="tod1"
            name="time"
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="tod1">
            Morning
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            name="time"
            id="tod2"
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="tod2">
            Afternoon
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            name="time"
            id="tod3"
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="tod3">
            Evening
          </label>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
