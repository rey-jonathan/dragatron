import "./styles/MembershipBox.css";

const MembershipBox = ({ data }) => {
  return (
    <>
      {data.map((a) => (
        <div className='box'>
          {a.popular && <p className='popular__text'>POPULAR.</p>}
          <div className='price__box'>
            <p className='box__title'>{a.title}</p>
            <p className='box__price'>
              ${a.price}
              <span style={{ fontWeight: "100" }}>/Month</span>
            </p>
          </div>
          {/* <div style={{ marginTop: "35px" }}> */}
          <ul className='box__list'>
            {a.features.map((feature, index) => {
              return <li key={index}>{feature}</li>;
            })}
          </ul>
          {/* </div> */}
          <a href='#' className='box__button'>
            proceed & pay
          </a>
        </div>
      ))}
    </>
  );
};

export default MembershipBox;
