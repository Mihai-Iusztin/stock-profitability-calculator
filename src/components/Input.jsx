export default function Input() {
  return (
    <section id="input-container">
      <div className="user-input">
        <p>
          <label htmlFor="">Instrument</label>
          <input type="text" required />
        </p>
      </div>
      <div className="user-input">
        <p>
          <label htmlFor="">Number of stocks</label>
          <input type="number" required />
        </p>
        <p>
          <label htmlFor="">Stock price</label>
          <input type="number" required />
        </p>
      </div>
      <div className="user-input">
        <p>
          <label htmlFor="">Stock variation %/year</label>
          <input type="number" required />
        </p>
        <p>
          <label htmlFor="">New investment(stks/y)</label>
          <input type="number" required />
        </p>
        <p>
          <label htmlFor="">Duration(years)</label>
          <input type="number" required />
        </p>
      </div>
    </section>
  );
}
