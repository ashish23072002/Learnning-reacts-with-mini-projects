export const getLocalStorageData = () => {
  const rawTodos = localStorage.getItem("reactToDo");
  if (!rawTodos) return [];
  return JSON.parse(rawTodos);
};



// export const getLocalStorageData = () => {
//   try {
//     const rawTodos = localStorage.getItem("reactToDo");
//     if (!rawTodos) return [];
//     return JSON.parse(rawTodos);
//   } catch (error) {
//     console.error("Failed to parse localStorage data:", error);
//     return [];
//   }
// };

    
export const setLocalStorageData = (task) => {
  return localStorage.setItem("reactToDo", JSON.stringify(task));
  
};
