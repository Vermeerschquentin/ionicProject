
export const Panier = (items=[])=>{

    const [show,setShow] = useState(false);

    return(<div>
        <button onClick={()=>setShow(true)}>panier</button>
        <ul style={{display:show?"block":"none", position:"fixed"}}>
            {items.map((item)=><ItemCell item />)}
        </ul>
    </div>)
}


export const ItemCell = ({item})=>{
    return(<li>{item.name} <img src={item.img} /></li>)
}