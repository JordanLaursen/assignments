import React from "react";
import Welcome from "./Welcome";


const vacationSpots = [
  {
    place: "Meridian, Idaho",
    price: "$40",
    timeToGo: "Spring"
  },{
    place: "Cancun",
    price: "$900",
    timeToGo: "Winter"
  },{
    place: "China",
    price: "$1200",
    timeToGo: "Fall"
  },{
    place: "Russia",
    price: "$1100",
    timeToGo: "Summer"
  },{
    place: "Lebanon",
    price: "$400",
    timeToGo: "Spring"
  }
]

const App = () => {
        const mappedVacation = vacationSpots.map((spot) => {
            return <Welcome place={spot.place} price={spot.price} time={spot.timeToGo} />
        });
        return (
            <div className="whole">
                { mappedVacation }
            </div>
        );
}

//
// const App = () => {
//     return (
//         <div>
//             <Welcome color="red" title="Jeramiah" subtitle="This is the subtitle 1" info="You are a shoobie" />
//             <Welcome color="yellow" title="Bull" subtitle="This is the subtitle 2" info="You are a shoobie" />
//             <Welcome color="green" title="Frog" subtitle="This is the subtitle 3" info="You are a shoobie" />
//         </div>
//     );
// }


export default App;
