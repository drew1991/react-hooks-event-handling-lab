function Keypad (){

    return (
    <div>
        <input type="password" placeholder="Enter Password" onChange={() => console.log("Entering password...")}></input>
    </div>
    )
}

export default Keypad;

