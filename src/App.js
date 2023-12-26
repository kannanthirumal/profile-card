import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <section class="hero is-primary">
        <div class="hero-body">
          <p class="title has-text-centered">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns is-flex-direction-row">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa1"
                imageSrc={AlexaImage}
                description="Your voice-activated shopping assistant, helping you manage orders, check inventory, and get store performance summaries."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="cortana"
                handle="@cortana25"
                imageSrc={CortanaImage}
                description="Your personal productivity assistant, streamlining your ecommerce operations with natural language processing."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="siri"
                handle="@siri5789"
                imageSrc={SiriImage}
                description="An intelligent assistant making ecommerce interactions seamless with voice-activated commands."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
