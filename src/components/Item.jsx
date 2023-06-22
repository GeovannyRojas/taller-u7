import React from "react";

const Item = ({ data }) => {
   
    return (
        <>
        {
            (!data) ? "" : (
                <>
                    <h1>{data.name}</h1>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
                    <h2>Tipo</h2>
                    <div className="abilities">
                        {
                            data.types.map(poke=>{
                                return(
                                    <>
                                     <div className={poke.type.name}>
                                        <h2>{poke.type.name}</h2>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    </>
            )
        }

        </>
    )
}
export default Item