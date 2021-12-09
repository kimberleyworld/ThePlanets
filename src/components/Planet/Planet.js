import React, {useEffect, useState} from "react";
import Stat from '../Stat/Stat';
import './planet.css';

const Planet = (props) => {

    useEffect (() => {
        //Template literal in back tics
        fetch(`https://api.le-systeme-solaire.net/rest/bodies/${props.id}`)
            .then ((data) => {
                return data.json()
            })
            .then ((response) => {
                setName(response.englishName)
                setGravity(response.gravity)
                setMeanRadius(response.meanRadius)
                setSideralRotation(response.sideralRotation)
                setFlattening(response.flattening)
                setInclination(response.inclination)
                setDensity(response.density)
                }
            )
    }, [])

    //1. reach out to the API with fetch, get all information about jupiter
    //2. set the state

    const [name, setName] = useState();
    const [gravity, setGravity] = useState();
    const [meanRadius, setMeanRadius] = useState();
    const [sideralRotation, setSideralRotation] = useState();
    const [flattening, setFlattening] = useState();
    const [inclination, setInclination] = useState();
    const [density, setDensity] = useState();

    console.log("foo")
    console.log(props.url)
    return (
        <>
            <img src={props.url} alt="" />
            <h5>This is Jupiter, and it loves the number:</h5>
            <h2>boing</h2>
            <Stat data={`the gravity here is {gravity}`} />
            <div>{props.data}</div>
        </>
    )
}
export default Planet