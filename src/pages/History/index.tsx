import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Leitura Matinal</td>
              <td>20 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status statusType="success">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Leitura Matinal</td>
              <td>20 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status statusType="inProgress">Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Leitura Matinal</td>
              <td>20 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status statusType="success">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Leitura Matinal</td>
              <td>20 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status statusType="interrupted">Interrompido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
