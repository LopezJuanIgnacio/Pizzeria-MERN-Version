import React from 'react'
var rows = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var rows2 = [1,2];

            
function Icons() {
    return (
        <div className="iconosContainer">
            {rows.map(i =>(
                <div className="iconos" key={i}>
                    {rows2.map(j =>(
                        <div key={j}>
                            {rows.map(h=>(
                                <i className="fas fa-pizza-slice" key={h}></i>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Icons
