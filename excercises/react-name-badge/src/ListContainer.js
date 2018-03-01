import React from "react";
import List from "./List";

const ListContainer = (props) => {
    const mappedInfo = props.information.map(function(current, i) {
        return <List firstName={current.firstName} lastName={current.lastName} email={current.email} phone={current.phone} pob={current.pob} favoriteFood={current.favFood} about={current.about} />
        // return (<List firstName={current.firstName} lastName={current.lastName} email={current.email} phone={current.phone} favFood={current.favFood} pob={current.pob} about={current.about} key={current.firstName+current.lastName+i}/>);
    });
    return(
            <ul>
                {mappedInfo}
            </ul>
    )
}

export default ListContainer;
