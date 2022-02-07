import React, { useState, useEffect } from 'react';
import './Search.css';

const Search = () => {

    const [value, setValue] = useState('');

    const [container, setContainer] = useState([]);



    useEffect(() => {
        fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=+${value}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "imdb8.p.rapidapi.com",
                "x-rapidapi-key": "50e5875042mshc342f1fcf2d5632p14862ajsnc51b3f2e63c7"
            }
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                setContainer(data.d);
            })
            .catch(err => {
                console.error(err);
            });
    }, [value])



    const handleChange = (e) => {
        setValue(e.target.value);
    }


    return (
        <div className='App'>

            <form>
                <input type="text" value={value} onChange={handleChange} />
                <button type='submit'>Submit</button>
            </form>
            <div className='element'>
                {container.map((item, index) => {
                    return (
                        <div key={index} className='element-div'>
                            <img src={item.i.imageUrl} alt='' />
                            <p>{item.l}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    );
}

export default Search;