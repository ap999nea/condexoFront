import "./Css/Animation.css";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import WelcomeNav from "./components/WelcomeNav";

export const Animation = () => {
  return (
    <>
      <WelcomeNav />
      <div className="animationContainer">
        <div className="animation">
          <SentimentSatisfiedAltIcon />
        </div>
        <p className="welcomeMsg">Benvenuto nel nostro portale!</p>
      </div>
    </>
  );
};
