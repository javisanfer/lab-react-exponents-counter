const ExponentFour = ({base}) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">n⁴</p>
    <p className="exponent-result">
      {base} * {base} * {base} * {base} = <span className="total">{base ** 4}</span>
    </p>
  </div>
);

export default ExponentFour;