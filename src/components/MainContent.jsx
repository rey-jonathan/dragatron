import MembershipBox from "./MembershipBox";
import { pricing } from "../data/pricing";

const MainContent = () => {
  return (
    <div style={{ width: "75%", margin: "auto" }}>
      <h3>
        SIGN UP AS A <span style={{ color: "#fec465" }}>PROFESSIONAL</span>
      </h3>
      <p>
        <span style={{ color: "#fec465" }}>STEP 3/4</span> SELECT TRAINER
        SUBSCRIPTION
      </p>
      <p>
        With 3 types of membership,{" "}
        <span style={{ color: "#fec465" }}>
          Discover the membership which fits your personal needs.
        </span>
      </p>
      <div style={{ display: "flex" }}>
        <MembershipBox data={pricing} />
      </div>
    </div>
  );
};

export default MainContent;
