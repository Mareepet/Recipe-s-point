import Pages from './pages/Pages';
import env from "react-dotenv";
import Category from "./components/Category";
import { BrowserRouter } from 'react-router-dom';
import Search from './components/Search';
  
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    {/* <img src="https://media.tenor.com/I7GuZXfrYmkAAAAj/peach-goma.gif"  alt="" />  */}
    <h1>Recipe'S Point</h1>
      <Search />
       <Category/>
       <Pages />
    </BrowserRouter>
    </div>
  );
} 

export default App;
