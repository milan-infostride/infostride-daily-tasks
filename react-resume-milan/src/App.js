
import Navbar_component from './components/Navbar_component';
import Resume_page_component from './components/Resume_page_component';
import FooterComponent from './components/FooterComponent';
import './App.css';

function App() {
  
  return (
    <div>
      {/* <script src="https://kit.fontawesome.com/16139588c8.js" ></script> */}
      <Navbar_component></Navbar_component>
      <Resume_page_component></Resume_page_component>
      <FooterComponent />
    </div>
  );
}

export default App;
