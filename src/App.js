import 'bulma/css/bulma.css'
import ProfileCard  from "./ProfileCard";
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'


function App() {
    return (
            <div>
                <section className="hero is-primary">
                        <div className="hero-body">                
                            <p className="title">Personal Digital Assistant</p>
                        </div>
                </section>


                <div className="container">
                  <section className="section">
                      <div className="columns">
                        <div className="column is-4">
                            <ProfileCard title="John Doe" handle="@johndoe" image={AlexaImage}
                            description="Alexa is an intelligent personal assistant developed by Amazon, integrated with various Amazon devices like the Amazon Echo and the Amazon Echo Dot. It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, and other real-time information."
                            />
                       </div>
                    <div className="column is-4">
                        <ProfileCard title="Jane Doe" handle="@janedoe" image={CortanaImage} 
                        description="Cortana is a virtual assistant developed by Microsoft for Windows 10, Windows 10 Mobile, Windows Phone 8.1, Invoke smart speaker, Microsoft Band, Surface Headphones, Xbox One, iOS, Android, and Windows Mixed Reality. It is designed to assist with tasks, answer questions, and help users get things done."
                        />
                    </div>
                    <div className="column is-4">
                        <ProfileCard title="Jim Smith" handle="@jimsmith" image={SiriImage} 
                        description="Siri is a virtual assistant that is part of Apple Inc.'s iOS, iPadOS, watchOS and macOS operating systems. The assistant uses voice queries and a natural-language user interface to answer questions, make recommendations, and perform actions by delegating requests to a set of Internet services. The software adapts to users' individual language usages, searches, and preferences, with continuing use."
                        />
                    </div>
                    </div>
                </section>
                </div>

            </div>
    );
  }
  
export default App;