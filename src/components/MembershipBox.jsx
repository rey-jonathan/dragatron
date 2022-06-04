import "./MembershipBox.css";

const MembershipBox = ({ data }) => {
  return (
    <>
      {data.map((a) => (
        <div className='box'>
          {a.popular && <p className='popular__text'>POPULAR.</p>}
          <div className='price__box'>
            <h3 className='box__title'>{a.title}</h3>
            <h4 className='box__price'>${a.price}/Month</h4>
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
