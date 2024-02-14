import { profitResults, formatter } from '../util/profit';

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
              <td>{formatter.format(data.stockNumber)}</td>
              <td>{formatter.format(data.stockPrice)}</td>
              <td>{formatter.format(investment)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
