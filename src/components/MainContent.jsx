import MembershipBox from "./MembershipBox";
import { pricing } from "../data/pricing";

import "./styles/MainContent.css";

const MainContent = () => {
  return (
    <div className='main'>
      <h1>
        SIGN UP AS A <span style={{ color: "#fec465" }}>PROFESSIONAL</span>
      </h1>
      <p className='main__text'>
        <span style={{ color: "#fec465" }}>STEP 3/4</span> SELECT TRAINER
        SUBSCRIPTION
      </p>
      <p>
        With 3 Types of membership,{" "}
        <span style={{ color: "#fec465" }}>
          Discover the membership which fits your personal needs.
        </span>
      </p>
      <div className='pricing__box'>
        <MembershipBox data={pricing} />
      </div>
    </div>
  );
};

export default MainContent;
