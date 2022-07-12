// == Project imports
import Header from 'src/components/Header';
import Welcome from 'src/components/Welcome';
import MainMenu from 'src/components/MainMenu';
import Footer from 'src/components/Footer';
// == Same file imports
import './app.scss'

// == Composant
const App = () => (
  <div className="app">
    <Header/>
    <Welcome/>
    <MainMenu/>
    <Footer/>
  </div>
);

// == Export
export default App;
