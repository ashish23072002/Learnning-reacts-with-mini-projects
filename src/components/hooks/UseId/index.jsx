import { useId } from "react";

export const UseID = () => {
//   const userID = useId();
//   const emailId = useId();

//   return (
//     <>
//       <form onSubmit={{}}>
//         <label htmlFor={userID}>Username:</label>
//         <input type="text" id={userID} name="name" />
//         <label htmlFor={emailId}>Email</label>
//         <input type="email" id={emailId} name="email" />
//         <button type="submit">sumbit</button>
//       </form>
//     </>
//   );

// alternate and sinple method to use useid hookm in react js 
  const id = useId();

  return (
    <>
      <form onSubmit={{}}>
        <label htmlFor={id + "userID"}>Username:</label>
        <input type="text" id={id + "userID"} name="name" />
        <label htmlFor={id +"emailId"}>Email</label>
        <input type="email" id={id +"emailId"} name="email" />
        <button type="submit">sumbit</button>
      </form>
    </>
  );
};
