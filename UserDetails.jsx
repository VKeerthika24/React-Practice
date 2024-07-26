import React from "react";
import { useState } from "react";
export const UserDetails=()=>{
    //const [userName,setuserName]=useState("vino");
    //const [userAge,setuserAge]=useState(100);
    //const [User,setUser]=useState({name:"vino",age:21})
    /*{const updateuserName=()=>{
        //setuserName("ananya")
        //userName=="vino" ? setuserName("ananya"):setuserName("vino")
    }
    //const updateuserAge=()=>{
        //setuserAge(98)
        //userAge==100 ? setuserAge(98):setuserAge(100)
    }}*/
    /*{const updateuserName=()=>{
        setUser({...User,name:"anuska"})
    }
    const updateuserAge=()=>{
        setUser({...User,age:100})
    }}*/
    /*function changeHandler(e)
    {
        alert(e.target.value)
    }*/
    const [User, setUser]=useState({name:"vino", age:21})
    function changeHandler(e)
    {
        setUser({...User,[e.target.value]:e.target.value})
    }
    
    return(
        <>
        <h2>
            {User.name}{User.age}
        </h2>
        <form>
            <input type="text" placeholder="enter user name" onChange={changeHandler} value={User.name}/>
            <input type="number" placeholder="enter user age" onChange={changeHandler} value={User.age}/>
        </form>
        </>
        /*<>
        <h1>User Details</h1>
        <h3>{User.name}</h3>
        <h3>{User.age}</h3>
        <button onClick={updateuserName}>Update username</button>
        <button onClick={updateuserAge}>Update user Age</button>
        </>*/
    )

}