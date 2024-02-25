import PropTypes from "prop-types"

// function Greeting(promp){
//     return <h1>Hello {promps.name}</h1>
// }


function Greeting(props){
    // const {time, name} = props 
    const {name, time} = props 
    if (time === "evening"){
        return <h3>Good evening, {name}</h3>
    }
    else if (time === "morning"){
        return <h3>Good morning, {name}</h3>
    }
    return <h3>Good Afternoon</h3>
}

Greeting.propTypes = {
    name: PropTypes.string,
    time: PropTypes.string,
}

export default Greeting;