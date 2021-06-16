import './styles/App.scss';
import {Header, Sidebar, Content} from './components';

function App() {
  return (
    <div className="wrapper">
      <Sidebar/>
      <Header/>
      <Content/>
    </div>
  );
}

export default App;
