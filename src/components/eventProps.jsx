
const HandelWelcomeUser = (user)=>{
    alert(`Hello ${user} welcome!`);
    
};
const handleHover = ()=>{
    console.log("Thanks For hovering me ")
    
};

export const EventProps = () => {
    return(
    <>
        <WelcomeUser 
        onClick={()=> HandelWelcomeUser("Ashish")}
        onMouseEnter={handleHover}/>
    </>);
};

export const WelcomeUser = (props) => {

    const HandleGreeting= ()=>{
        console.log(`Hey User , Welcome!`);
        props.onClick();
    }

    return(
    <>
        <button onClick={props.onClick}>Click me</button>
        <button onMouseEnter={props.onMouseEnter}>Hover me</button>
        <button onClick={HandleGreeting}>Greetings</button>
    </>);
};


