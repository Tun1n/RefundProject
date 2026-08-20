import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Link } from "react-router";

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmed, setPasswordConfirmed] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function onSubmit(event: React.FormEvent){
        event.preventDefault()
        console.log(name, email, password, passwordConfirmed)
    }

    return <form
            onSubmit={onSubmit}
            className="w-full flex flex-col gap-4"
            >
        <Input 
            required 
            legend="Name" 
            placeholder="Seu nome"
            onChange={(event) => setName(event.target.value)}/>

        <Input 
            required 
            legend="E-mail" 
            type="email" 
            placeholder="seu@email.com"
            onChange={(event) => setEmail(event.target.value)}/>

        <Input 
            required 
            legend="Senha" 
            type="password" 
            placeholder="123456"
            onChange={(event) => setPassword(event.target.value)}/>

        <Input 
            required 
            legend="Confirmação da Senha" 
            type="password" 
            placeholder="123456"
            onChange={(event) => setPasswordConfirmed(event.target.value)}/>

        <Button type="submit" isLoading={isLoading}> Registrar </Button>

        <Link to="/" className="text-sm font-semibold text-gray-100 
        mt-10 mb-4 text-center hover:text-green-800 transition ease-linear"> Já tenho uma conta </Link>
    </form>
}