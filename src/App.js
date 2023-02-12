import ProfileCard  from "./ProfileCard";
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

function App() {
    return (
      <div>
         <div>Personal Digital Assistant</div>
         <ProfileCard title="John Doe" handle="@johndoe" image={AlexaImage} />
         <ProfileCard title="Jane Doe" handle="@janedoe" image={CortanaImage} />
         <ProfileCard title="Jim Smith" handle="@jimsmith" image={SiriImage}/>
      </div>
    );
  }
  
  export default App;