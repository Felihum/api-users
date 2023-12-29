import { useState } from "react"
import { UserData } from "../../interface/UserData";
import { useUserDataMutate } from "../../hooks/useUserDataMutate";

interface InputProps{
    label: string,
    value: string | number,
    updateValue(value: string): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return(
        <>
            <label>{label}</label>
            <input value={value} onChange={e =>updateValue(e.target.value)}></input>
        </>
    )
}

export function CreateModal(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const { mutate } = useUserDataMutate();

    const submit = () => {
        const userData: UserData = {
            name,
            email,
            password
        }
        mutate(userData)
    }
    
    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo usuário</h2>
                <form className="input-container">
                    <Input label="Name" value={name} updateValue={setName}/>
                    <Input label="Email" value={email} updateValue={setEmail}/>
                    <Input label="Senha" value={password} updateValue={setPassword}/>
                </form>
                <button onClick={submit} className="btn-secondary">Postar</button>
            </div>
        </div>
    )
}