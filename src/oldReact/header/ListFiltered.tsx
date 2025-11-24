

export const ListFiltered = ()=>{

    const [filterTxt,setFilterTxt] = useState("");

    const itemList = []

    return(
    <div>
        <input id={"searchBar"} value={filterTxt} onChange={(e)=>setFilterTxt(e.target.value)} />
        <div>
            {itemList.map((item)=>{
                const words = filterTxt.split(" ");
                let affiche = false;
                if(filterTxt.trim()==""){
                    affiche = true
                }else{
                words.forEach(element => {
                    if(item.adress.contain(element)){
                        affiche=true;
                    }
                    if(item.name.contain(element))
                });
                }
                return (affiche&&<Item item={item} />)
            })}
        </div>
    </div>
        )
}

export const Item = ({item})=>{
    return(
    <div>
        <p>{item.name}</p>

        {
            item.img!=undefined && <img src={item.img} />
        }
        <p>{item.adress}</p>
        <p>{item.desc}</p>
    </div>)
}