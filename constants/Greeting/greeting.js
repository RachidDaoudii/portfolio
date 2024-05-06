import { greeting } from "../../portfolio";
import SocialMedia from "../../components/socialMedia/SocialMedia";

const Greeting = () =>{
    return (
        <>
        <div >
      <div className="greet-main" id="greeting">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">{greeting.title}</h1>
              <p
                className="greeting-text-p subTitle"
              >
                <span>I'm </span>
                <span >
                  {greeting.full_name}.{" "}
                </span>
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="portfolio-repo-btn-div">
                <button
                  className="button"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
          </div>
        </div>
      </div>
      </div>
    </div>
        </>
    )
}

export default Greeting