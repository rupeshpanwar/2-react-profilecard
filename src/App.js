import ProfileCard  from "./ProfileCard";

function App() {
    return (
      <div>
         <div>Personal Digital Assistant</div>
         <ProfileCard title="John Doe" handle="@johndoe" />
         <ProfileCard title="Jane Doe" handle="@janedoe" />
         <ProfileCard title="Jim Smith" handle="@jimsmith" />
      </div>
    );
  }
  
  export default App;