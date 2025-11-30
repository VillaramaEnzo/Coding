import React from "react";

const PokeList = (props) => {
    
    const { pokemon } = props;
    
    return (
        
        <div>
        
        {pokemon.map(p => (
            
            <div key = {p}> {p} </div>
            
        ))
        
        }
        
        </div>
        
    )
    
}

export default PokeList;