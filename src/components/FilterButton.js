import { useEffect, useState } from 'react';
import '../App.css'

const FilterButton = ({data, filterBy}) => {

    const [filter, setFilter] = useState([]);
    
    useEffect(() => {
    if (filterBy === 'position') {
            setFilter(prevFilter => prevFilter = [...new Set(data.map((data) => data.position))]);
        } else if (filterBy === 'team') {
            setFilter(prevFilter => prevFilter = [...new Set(data.map((data) => data.team))]);
        }
    },[]);

    return ( 
        <select name="filterPlayers" className='filterDropdown'>
            <option className='filterOption' value="All">All</option>
            {filter.map((item, index)=> (
                <option className='filterOption' key={index} value={item}>{item}</option>
            ))}
        </select>
     );
}

export default FilterButton;