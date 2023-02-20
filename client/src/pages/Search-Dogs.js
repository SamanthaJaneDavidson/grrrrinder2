import React from 'react';

function SearchDogs(props) {
    return (
        <div>
            <div className="input-group mb-3">
              
                <input className="form-shared"
                    onChange={props.handleSearchboxChange} type="name" />
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
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" onChange={props.handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="inlineCheckbox3">Vaccinated</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox4" onChange={props.handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="inlineCheckbox4">Neutered</label>
                </div>
            </div>
        </div>
    )
}
export default SearchDogs;