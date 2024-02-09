interface ResultProps{
  values:{
    peso:string,
    altura:string 
  }
}
export default function Result({values:{altura,peso}}:ResultProps){

    const calcularIMC = (peso:string ,altura:string ): string => {
      if((!peso || !altura) || (peso == "0" || altura == "0")) return "0.00";
      return (parseFloat(peso) / (parseFloat(altura) * parseFloat(altura))).toFixed(2);
    }

    const getStatus = (imc:number): string[] =>{
      let status: string = "";
      let color: string = "";
      if(imc === 0){
        status = "Calcule seu imc"
        color = "bg-gray-500"
      }
      else if(imc < 17){
        status = "Muito abaixo do peso"
        color = "bg-purple-800"
      }
      else if(imc < 18.49){
        status = "Abaixo do peso";
        color = "bg-purple-400"
      }
      else if(imc < 24.99){
        status = "Peso normal";
        color = "bg-green-400"
      }
      else if(imc < 29.99){
        status = "Acima do peso";
        color = "bg-yellow-400"
      }
      else if(imc < 34.99){
        status = "Obesidade 1";
        color = "bg-orange-400"
      }
      else if(imc < 39.99){
        status = "Obesidade 2(severa)";
        color = "bg-orange-600"
      }
      else if(imc >= 40){
        status = "Obesidade 3(mórbida)";
        color = "bg-red-600"
      }

      return [status,color];
    }

    return(
        <table className="w-full my-5" >
        <thead className="border-solid border-b-2 border-[#e85b81]">
          <tr className="text-left">
            <th>Peso</th>
            <th>Altura</th>
            <th>IMC</th>
            <th>Resultado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{peso === "" ? "0.00" : peso}</td>
            <td>{altura === "" ? "0.00" : altura}</td>
            <td>{calcularIMC(peso,altura)}</td>
            <td className={`${getStatus(Number(calcularIMC(peso,altura)))[1]} text-center text-white`}>{getStatus(Number(calcularIMC(peso,altura)))[0]}</td>
          </tr>
        </tbody>
      </table>
    )
}