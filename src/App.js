import Navebar from './component/Navbar';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header';
import Particles from "react-particles-js";
import Aboutme from "./component/AboutMe";
import Intrest from "./component/Intrest";
import Experience from "./component/Experience";
import Contects from "./component/Contacts";
import Footer from "./component/Footer";
function App() {

  return (
      
    <div>
      <Particles
      className="particles-canvas"
      params={{
        particles:{
          number:{
            value:30,
            density:{
              enable:true,
              value_area:900
            }
          },
          shape:{
            type:"circle",
            stroke:{
              width:6,
              color:"#f9ab00"
            }
          }
        }
      }}
      />
      
      <Navebar />
      <Header />
      <Aboutme/>
      <Intrest/>
      <Experience/>
      <Contects/>
      <Footer/>
    </div>
  );
}

export default App;
