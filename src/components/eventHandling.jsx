
export const EventHandling=() => {

    // Use traditional function syntax if hoisting is needed or for reusable utilities./ Traditional Way of writing the function 
    // function handleButtonClick(){
    //     alert("i am pressed ")
    // }

    // Developers prefer arrow functions for consistency and cleaner syntax, especially when passing them as props or defining them inline.
    const handleButtonClick = (event) => {
        console.log("button is pressed");
        console.log(event); 
        console.log(event.target);
        console.log(event.type);
        
    }
    const welcomeUser = (user) => {
        console.log(`Hey ${user} Welcome`);
        
    }
    
    return(
        <div>
            This is Event handling page!!<br/>

            {/* Funtion conponent with named Function. */
            /*
            Remember how we haven't called this function, if you call this function here
            then it will run without even clicking . example 
            ---->  handleButtonClick()   <-------- This is Wrong❌
            ---->   handleButtonClick    <--------simply call it ✅
            . you just need to pass refrence and not call here.
             */}
            <button onClick={handleButtonClick}>Click me 1</button><br/>
            {/* <button onClick={handleButtonClick()}>Click me 1</button><br/>  This is Wrong❌  , this will run again and again while Page start*/}


            {/* using fat arrow function / now we prefer this method  */}
            {/* In React, event handlers receive the event object as an argument by default. 
            However, when you use an arrow function directly in the onClick attribute without 
            passing the event explicitly, React doesn't pass the event object to your handler 
            function. This is because the arrow function creates a new function and calls your 
            handler without passing any arguments. */}
            <button onClick={(event)=> handleButtonClick(event)}>Click me 2</button><br/>


            {/* Inline arrow function */}
            <button onClick={()=> alert("I am an Inline Event Handler")}>Inline Event Handlers(Log)</button><br/>

            {/* Inline Event Handlers */}
            <button onClick={(event)=> console.log("this is an alert for Inline",event)}>Inline Event Handlers(Log)</button><br/>

            {/* Pass Argument to Event Handler  */}
            <button onClick={()=> welcomeUser("Ashish")}>Welcome User</button><br/>


        </div>
    );

};