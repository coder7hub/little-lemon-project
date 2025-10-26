import { useState, createContext } from "react";

{/* create the context box  */}
export const InfoContext = createContext({})


export const  InfoProvider =({children})=>{
    
    const [userInfo, setUserInfo] = useState({});
    return (
       <InfoContext.Provider value ={ {userInfo, setUserInfo}}>
        {children}
       </InfoContext.Provider>
       
    )
}

