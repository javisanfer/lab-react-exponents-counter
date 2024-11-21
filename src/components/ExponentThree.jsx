const ExponentThree = ({base}) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">n³</p>
    <p className="exponent-result">
    {base} * {base} * {base} = <span className="total">{base ** 3}</span></p>
  </div>
);

export default ExponentThree;