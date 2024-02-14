import { profitResults } from '../util/profit';

export default function Return({ investInput }) {
  const returnData = profitResults(investInput);

  return (
    <table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Stocks</th>
          <th>Price/Stock</th>
          <th>Final Investment</th>
        </tr>
      </thead>
      <tbody>
        {returnData.map((data) => {
          let investment = data.stockNumber * data.stockPrice;

          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{data.stockNumber}</td>
              <td>{data.stockPrice}</td>
              <td>{investment}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
