import React ,{createContext,useContext,useState} from "react";
const Theme = createContext();

const ThemeContext =({children}) => {
    const [theme,setTheme] = useState();
   

return(
    <Theme.Provider value={{theme,setTheme}}>
      {children}
    </Theme.Provider>
);



};



export default ThemeContext;
export const ThemeState =() => {
    return useContext(Theme);
}