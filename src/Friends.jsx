import { useEffect } from "react";
import { useState } from "react";
import Friend from "./Friend";

export default function Friends(){
    const [friends, setFriends] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setFriends(data))
  }, [])

return (
    <div className="border-8 text-center mb-7">
        <h3 className="text-5xl text-center">Friends :{friends.length}</h3>    
        { 
            friends.map(friend => <Friend friend = {friend}></Friend>)
        }
    </div>
)
}