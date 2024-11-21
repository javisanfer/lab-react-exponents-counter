const ExponentTwo = ({ base }) => (
    <div className="exponent-counter-container">
      <p className="exponent-label">n²</p>
      <p className="exponent-result">
        {base} * {base} = <span className="total">{base ** 2}</span>
      </p>
    </div>
  );

export default ExponentTwo;