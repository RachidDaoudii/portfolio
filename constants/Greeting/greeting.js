import { greeting } from "../../portfolio";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import FeelingProud from "./FeelingProud"
const Greeting = () =>{
    return (
        <>
        <div >
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div ">
            <div>
              <p
                className="greeting-text-p subTitle"
              >
                <span>{greeting.title} I'm </span>
                <span >
                  {greeting.full_name}.{" "}
                </span>
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="portfolio-repo-btn-div">
                <button
                  className="button projects"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud/>
          </div>
        </div>
      </div>
      </div>
        </>
    )
}

export default Greeting