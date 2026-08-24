import { BrowserRouter } from "react-router"; 
import { ManagerRoutes } from "./ManagerRoutes";
import { AuthRoutes } from "./Auth-routes";
import { Loading } from "../components/Loading";
import { EmployeeRoutes } from "./EmployeeRoutes";

const isLoading = false
const session = {
    user: {
        role: ""
    }
}

export function Routes(){
    function HandleRoute(){
        switch(session.user.role){
            case "manager":
                return <ManagerRoutes/>
            case "employee":
                return <EmployeeRoutes/>
            default:
                return <AuthRoutes/>
        }
    }


    if(isLoading){
        return <Loading/>
    }

    return <>
        <BrowserRouter>
            <HandleRoute/>
        </BrowserRouter>
    </>
}