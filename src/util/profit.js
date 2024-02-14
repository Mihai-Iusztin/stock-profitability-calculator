export function profitResults({
  initialStocks,
  initialPrice,
  annualProfitability,
  annualNewStocks,
  duration,
}) {
  const investmentData = [];
  let stockPrice = (100 * initialPrice) / (100 + annualProfitability);

  let stockNumber = initialStocks - annualNewStocks;

  for (let i = 0; i < duration; i++) {
    stockNumber += annualNewStocks;
    stockPrice = stockPrice * (1 + annualProfitability / 100);
    investmentData.push({
      year: i + 1, // year identifier
      stockNumber: stockNumber, //number of stocks at the end of the year
      stockPrice: stockPrice, //stock price at the end of the year
    });
  }
  return investmentData;
}
