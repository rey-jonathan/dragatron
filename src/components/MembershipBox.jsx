import "./MembershipBox.css";

const MembershipBox = ({ data }) => {
  return (
    <>
      {data.map((a) => (
        <div
          className='box'
          style={{
            border: "1px solid #4f5e62",
            width: "fit-content",
            textAlign: "center",
            margin: "0 10px",
            position: "relative",
            height: "350px",
            width: "275px",
          }}
        >
          {a.popular && (
            <p
              className='popular__text'
              style={{
                position: "absolute",
                top: "-32px",
                right: "10px",
                color: "#20242f",
                "-webkit-text-stroke": "1px gray",
                fontSize: "20px",
              }}
            >
              POPULAR.
            </p>
          )}
          <div className='price__box'>
            <h3 className='box__title'>{a.title}</h3>
            <h4 className='box__price'>${a.price}/Month</h4>
          </div>
          <ul>
            <li>Promote yourself & reach thousands of user globally</li>
            <li>Accept Payments</li>
            <li>Both In Person & Virtual trainings</li>
            <li>Access to manager customers health profile</li>
            <li>Verified Profile</li>
            <li>Access to weekly newsletters</li>
          </ul>
          <a href='#' className='hvr-sweep-to-top' />
        </div>
      ))}
    </>
  );
};

export default MembershipBox;
