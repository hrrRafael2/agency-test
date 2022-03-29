import './App.css';
import Nav from './components/nav/Nav';
import SectionExperience from './components/sectionExperience/SectionExperience';

function App() {
  return (
    <div className='App'>
      <Nav
        home='Home'
        about='About us'
        service='Service'
        blog='Blog'
        contact='Contact us'
      />

      <SectionExperience />
    </div>
  );
}

export default App;
