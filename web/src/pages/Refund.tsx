import { useState } from "react";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories";
import {Upload} from "../components/Upload"
import { Button } from "../components/Button";
import { useNavigate } from "react-router";

export function Refund(){
    const [category, setCategory] = useState("")
    const [name, setName] = useState("")
    const [amount, setAmount] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [fileName, setFileName] = useState<File | null>(null)

    const navigate = useNavigate()

    function onSubmit(event: React.FormEvent){
        event.preventDefault()

        console.log(name, category, amount, fileName?.name, isLoading)
        navigate("/confirm",{
            state: {
                fromSubmit: true
            }
        })
    }

    return <>
        <form onSubmit={onSubmit} className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6
            lg:min-w-[512px]">
            <header>
                <h1 className="text-xl font-bold text-gray-100"> Solicitação de reembolso </h1>
                <p className="text-sm text-gray-200 mt-2 mb-4">Dados da despesa para solicitar reembolso </p>
            </header>

            <Input 
                required
                legend="Nome da Solicitação"
                value={name}
                onChange={(event) => setName(event.target.value)}/>

            <div className="flex gap-4">
                <Select 
                required 
                legend="Categoria" 
                value={category} 
                onChange={(event) => setCategory(event.target.value)}>

                    {CATEGORIES_KEYS.map((cat) =>(
                        <option key={cat} value={cat}>
                            {CATEGORIES[cat].name}
                        </option>
                    ))}
                </Select>

                <Input 
                    required 
                    legend="Valor"
                    value={amount} 
                    onChange={(event) => setAmount(event.target.value)}
                    />
            </div>

            <Upload 
                filename={fileName && fileName.name}
                onChange={(event) => event.target.files && setFileName(event.target.files[0])}/>

            <Button 
                type="submit"
                isLoading={isLoading}>
                Enviar
            </Button>
        </form>
    </>
}