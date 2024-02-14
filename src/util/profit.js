// This function expects a JS object as an argument
// The object should contain the following properties
// - initialStocks: The initial number of stocks invested
// -initialPrice: The initial stock price
// - annualprofitability: The % of stock price variation in one year
// - annualNewStocks: The number of new stocks invested in one year
// - duration: The investment duration

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

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
