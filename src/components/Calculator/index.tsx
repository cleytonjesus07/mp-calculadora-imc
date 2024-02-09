import { ChangeEvent, useRef } from "react";

interface CalculatorProps{
    values:{
        peso:string ,
        altura:string 
    },
    setValues:React.Dispatch<React.SetStateAction<{
        peso: string;
        altura: string;
    }>>
}


export default function Calculator({values,setValues}:CalculatorProps){
    const inputPesoRef = useRef<HTMLInputElement>(null);

    function checkNumberAndDotsAndCommas(str:string) {
        const regex = /^[0-9,. ]+$/;
        return regex.test(str);
    }

    const handlePeso = (e:ChangeEvent<HTMLInputElement>)=>{
        let peso:(string) = e.target.value.trim();
        setValues(old=>({...old,peso:""})) 
        if(!checkNumberAndDotsAndCommas(peso)) return;
        peso = peso.replace(/,/g, '.');
        setValues(old=>({...old,peso})) 
    }
    const handleAltura = (e:ChangeEvent<HTMLInputElement>)=>{
        let altura:(string) = e.target.value.trim();
        setValues(old=>({...old,altura:""})) 
        if(!checkNumberAndDotsAndCommas(altura)) return;
        altura = altura.replace(/,/g, '.');
        setValues(old=>({...old,altura})) 
    }

    const redo = () => {
        setValues({peso:"",altura:""})
        inputPesoRef.current?.focus();
    }

    return(
        <div className="space-y-2">
            <div className="flex flex-col">
                <span className="text-sm">Peso</span>
                <input maxLength={5} ref={inputPesoRef} onChange={handlePeso} value={values.peso} className="p-2 outline-none border-solid border border-[#e85b81] rounded-md" type="text" placeholder="KG" />
            </div>
            <div className="flex flex-col">
                <span className="text-sm">altura</span>
                <input maxLength={5} onChange={handleAltura} value={values.altura} className="p-2 outline-none border-solid border border-[#e85b81] rounded-md" type="text" placeholder="CM" />
            </div>
            <div className="pt-2">
                <button onClick={redo} className="relative active:top-1 w-full p-2 bg-[#e85b81] rounded-md text-white font-bold">Refazer</button>
            </div>
        </div>
    )
}