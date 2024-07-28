import FormUsuario from "@/components/usuario/FormUsuario";
import { Suspense } from "react";

export default function Page(){
    return (
        <div>
            <Suspense fallback={<div>Carregando...</div>}>
                <FormUsuario />
            </Suspense>
        </div>
    )
}