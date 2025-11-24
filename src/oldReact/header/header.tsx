import useNavigate from react;

export const SandwichButton = ()=>{

    return(
    <ul>
        <li onClick={useNavigate("aboutUs")}>qui sommes nous</li>
        <li onClick={useNavigate("partner")}>réstaurant partenaires</li>
        <li onClick={useNavigate("cookingIdea")}>idée de recette</li>
    </ul>)
}



export const Header =()=>{
    return(
        <div style={{display:flex}}>
            <SandwichButton />
                <p>title</p>
            <PanierButton />
        </div>
    )
}