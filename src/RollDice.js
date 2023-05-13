function RollDice(){
    const roll = function(){
            var number = 0;
            number =console.log(Math.ceil(Math.random() * 6));
            return number;
    }
    return(
       
        <>
        <p>Number to show:{roll()}</p>
        <button onClick={roll}>Roll</button>
        </>
    )
}
export default RollDice;