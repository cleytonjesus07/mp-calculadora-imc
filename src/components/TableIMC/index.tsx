export default function TableIMC(){
    return(
        <table className="table mytable">
        <thead className="bg-[#f4f4f4]">
          <tr>
            <th>IMC</th>
            <th>Classificação</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          <tr>
            <td>Menos de 17</td>
            <td className="bg-purple-800">Muito abaixo do peso</td>
          </tr>
          <tr>
            <td>Entre 17 e 18,49</td>
            <td className="bg-purple-400">Abaixo do peso</td>
          </tr>
          <tr>
            <td>Entre 18,5 e 24,99</td>
            <td className="bg-green-400">Peso normal</td>
          </tr>
          <tr>
            <td>Entre 25 e 29,99</td>
            <td className="bg-yellow-400">Acima do peso</td>
          </tr>
          <tr>
            <td>Entre 30 e 34,99</td>
            <td className="bg-orange-400">Obesidade 1</td>
          </tr>
          <tr>
            <td>Entre 35 e 39,99</td>
            <td className="bg-orange-600">Obesidade 2 (severa)</td>
          </tr>
          <tr>
            <td>Acima de 40</td>
            <td className="bg-red-600">Obesidade 3 (mórbida)</td>
          </tr>
        </tbody>
      </table>
    )
}