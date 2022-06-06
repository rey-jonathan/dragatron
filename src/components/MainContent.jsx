import MembershipBox from "./MembershipBox";
import { pricing } from "../data/pricing";

import "./styles/MainContent.css";

const MainContent = () => {
  return (
    <div className='main'>
      <h1>
        SIGN UP AS A <span className='main__text__gold'>PROFESSIONAL</span>
      </h1>
      <p className='main__text'>
        <span className='main__text__gold'>STEP 3/4</span> SELECT TRAINER
        SUBSCRIPTION
      </p>
      <p>
        With 3 Types of membership,{" "}
        <span className='main__text__gold'>
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
