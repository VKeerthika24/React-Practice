import React from "react";
const UserData=[
    {
        name:"Sundar Pichai", 
        place:"Madurai",
         description:"Front End Developer",
          profile:"./images/pic1.jpg" ,
          online:true,
           skills:["Front End Development","UI/UX", "HTML","CSS","JavaScript","React","Node"]},
           {
            name:"Sundar Pichai", 
            place:"Madurai",
             description:"Front End Developer",
              profile:"./images/pic2.jpg" ,
              online:true,
               skills:["Front End Development","UI/UX", "HTML","CSS","JavaScript","React","Node"]},
               {
                name:"Sundar Pichai", 
                place:"Madurai",
                 description:"Front End Developer",
                  profile:"./images/pic3.jpg" ,
                  online:true,
                   skills:["Front End Development","UI/UX", "HTML","CSS","JavaScript","React","Node"]}]
function User(props)
{
    return(
        <>
    <div className="card-container">
        <span className={props.online ? "pro online" : "pro offline"}>{props.online? "ONLINE": "OFFLINE"}</span>
        <img src={props.profile} alt="image" height={120} width={120} className="img" />
        <h3>{props.name}</h3>
        <h3>{props.place}</h3>
        <p>{props.description}</p>
        <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
        </div>
    <div className="skills">

        <h6>Skills</h6>
        <ul>
        {props.skills.map((skill,index)=>(
            <li key={index}>{skill}</li>
        ))}
        </ul>
    </div>
    </div>
    </>
    )

}
export const UserCard=()=>{
    return(
        
        <>0
           
           {
            UserData.map((user,index)=>(
                <User key={index} 
                name={user.name}
                place={user.place} 
                description={user.description}
                online={user.online}
                profile={user.profile}
                skills={user.skills}/>

            ))
           }

        </>
    )
}
// <User name="Sundar Pichai" place="Madurai" description="Front End Developer" profile="./images/pic1.jpg" online={true} skills={["Front End Development","UI/UX", "HTML","CSS","JavaScript","React","Node"]}/>