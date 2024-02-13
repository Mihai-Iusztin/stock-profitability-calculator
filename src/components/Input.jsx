export default function Input({
  investorInput,
  instrumentInput,
  inputChange,
  instrumentChange,
}) {
  return (
    <section id="input-container">
      <div className="user-input">
        <p>
          <label htmlFor="">Instrument</label>
          <input
            type="text"
            required
            value={instrumentInput.instrument}
            onChange={(event) => instrumentChange(event.target.value)}
          />
        </p>
      </div>
      <div className="user-input">
        <p>
          <label htmlFor="">Number of stocks</label>
          <input
            type="number"
            required
            value={investorInput.initialStocks}
            onChange={(event) =>
              inputChange('initialStocks', event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">Stock price</label>
          <input
            type="number"
            required
            step="0.01"
            value={investorInput.initialPrice}
            onChange={(event) =>
              inputChange('initialPrice', event.target.value)
            }
          />
        </p>
      </div>
      <div className="user-input">
        <p>
          <label htmlFor="">Stock variation %/year</label>
          <input
            type="number"
            required
            step="0.01"
            value={investorInput.annualProfitability}
            onChange={(event) =>
              inputChange('annualProfitability', event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">New investment(stks/y)</label>
          <input
            type="number"
            required
            value={investorInput.annualNewStocks}
            onChange={(event) =>
              inputChange('annualNewStocks', event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">Duration(years)</label>
          <input
            type="number"
            required
            value={investorInput.duration}
            onChange={(event) => inputChange('duration', event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
