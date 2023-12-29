import "./card.css"

interface CardProps{
    name: string,
    email: string,
    password: string
}

export function Card({name, email, password} : CardProps){
    return(
        <div className="card">
            <img src="./user-image.png"/>
            <h2>Nome: {name}</h2>
            <p><b>Email: {email}</b></p>
            <p><b>Senha: {password}</b></p>
        </div>
    )
}