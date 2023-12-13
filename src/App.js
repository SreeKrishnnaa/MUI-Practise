
import './App.css';
import DrawerAppBar from './DrawerAppBar.js';


import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
import StickyFooter from './StickyFooter.js';


function App() {
  return (
    <div className="App">
     <DrawerAppBar/>
     <SignUp/>
     <SignIn/>
     <StickyFooter/>
    </div>
  );
}

export default App;
