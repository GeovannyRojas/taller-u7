import React from "react";

const Detail = ({ data2 }) => {
   
    return (
        <>
        {
            (!data2) ? "" : (
                <>
                    <h2>Habilidades</h2>
                    <div className="abilities">
                    {
                            data2.abilities.map(poke=>{
                                return(
                                    <>
                                     <div className="group">
                                        <h2>{poke.ability.name}</h2>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <h2>Estadisticas</h2>
                    <div className="base-stat">
                        {
                            data2.stats.map(poke=>{
                                return(
                                    <>
                                        <h3>{poke.stat.name} : {poke.base_stat}</h3>
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
export default Detail