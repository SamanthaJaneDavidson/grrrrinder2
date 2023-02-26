import React from 'react';

function SearchBar(props) {
    return (
        <div>
            <div className="input-group mb-3">
              
                <input id="zip-code-search" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                    onChange={props.handleSearchboxChange} type="name" placeholder='search by zip code' />
            </div>
            <div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" onChange={props.handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="inlineCheckbox1">Male</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" onChange={props.handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="inlineCheckbox2">Female</label>
                </div>
            <p>Dog Gender</p>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" onChange={props.handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="inlineCheckbox3">Vaccinated</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox24" onChange={props.handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="inlineCheckbox24">Not Vaccinated</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox4" onChange={props.handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="inlineCheckbox4">Neutered</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox4" onChange={props.handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="inlineCheckbox4">Spayed</label>
                </div>
            <p>Health Status</p>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox5" onChange={props.handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="inlineCheckbox5">Small</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox6" onChange={props.handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="inlineCheckbox6">Medium</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox7" onChange={props.handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="inlineCheckbox7">Large</label>
                </div>
            <p>Dog Size</p>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox8" onChange={props.handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="inlineCheckbox8">Puppy</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox9" onChange={props.handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="inlineCheckbox9">Youth</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox10" onChange={props.handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="inlineCheckbox10">Adult</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox11" onChange={props.handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="inlineCheckbox11">Senior</label>
                </div>
             <p>Dog Age</p>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox12" onChange={props.handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="inlineCheckbox12">Shy</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox13" onChange={props.handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="inlineCheckbox13">Calm</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox14" onChange={props.handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="inlineCheckbox14">Energetic</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox15" onChange={props.handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="inlineCheckbox15">Outgoing</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox16" onChange={props.handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="inlineCheckbox16">Leader</label>
                </div>
            <p>Dog Temperment</p>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox17" onChange={props.handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="inlineCheckbox17">Monday</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox18" onChange={props.handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="inlineCheckbox18">Tuesday</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox19" onChange={props.handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="inlineCheckbox19">Wednesday</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox20" onChange={props.handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="inlineCheckbox20">Thursday</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox21" onChange={props.handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="inlineCheckbox21">Friday</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox22" onChange={props.handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="inlineCheckbox22">Saturday</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox23" onChange={props.handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="inlineCheckbox23">Sunday</label>
                </div>
            <p>Preferred Day</p>
            </div>
        </div>
    )
}

export default SearchBar;