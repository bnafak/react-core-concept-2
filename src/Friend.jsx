
export default function Friend({friend}){
    // console.log(friend)

    const {name, email} = friend;

    return (
        <div className="border-8 text-center mb-4">
            <h2>Name : {name}</h2>
            <h2>Email :{email}</h2>
        </div>
    )
}