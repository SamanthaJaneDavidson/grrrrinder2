import React from 'react';
import Searchbar from '../components/Searchbar';
import Map from '../components/Map'

function SearchDogs(props) {
    return (
        <div className='searchDogs'>
            <div>
                <Searchbar />
            </div>
            <div className='map'>
                <Map />
            </div>
        </div>
    )
}
export default SearchDogs;