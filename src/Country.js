import React from 'react';

function Country(props) {
    const {name,flags,capital,area,population} = props.country;
    const handleRemoveCountry = () => {
        alert("Dhaak");
    }
    return (
        <>
            <div className="col-md-4 mb-4">
                <div className="card shadow" >
                    <img src={flags.png} alt={name.common} className="card-img-top" />
                        <div className="card-body text-center">
                            <h5 className="card-title">{name.common}</h5>
                            <p className="card-text">{capital}</p>
                            <p className="card-text">{area}</p>
                            <p className="card-text">{population}</p>
                            <button className="btn btn-danger" onClick={handleRemoveCountry}> Remove Country </button>
                        </div>
                </div>
            </div>
        </>
    );
}

export default Country;
