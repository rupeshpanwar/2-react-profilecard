import 'bulma/css/bulma.css'
import ProfileCard  from "./ProfileCard";
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'


function App() {
    return (
            <div>
                <div>Personal Digital Assistant</div>

                <div className="container">
                  <section className="section">
                      <div className="columns">
                        <div className="column is-4">
                            <ProfileCard title="John Doe" handle="@johndoe" image={AlexaImage} />
                       </div>
                    <div className="column is-4">
                        <ProfileCard title="Jane Doe" handle="@janedoe" image={CortanaImage} />
                    </div>
                    <div className="column is-4">
                        <ProfileCard title="Jim Smith" handle="@jimsmith" image={SiriImage} />
                    </div>
                    </div>
                </section>
                </div>

            </div>
    );
  }
  
export default App;