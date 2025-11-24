

export const boatPage = ()=>{

    const boatList = []

    return(
    <div>
        <div>
            {boatList.map((boat)=><BoatItem boat={boat} />)}
        </div>
    </div>
        )
}

export const BoatItem = ({boat})=>{
    return(<div>
        <p>{boat.name}</p>
        <img src={boat.img} />
        <p>{boat.desc}</p>
    </div>)
}