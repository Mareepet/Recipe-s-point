import Pages from './pages/Pages';
import env from "react-dotenv";
import Category from "./components/Category";
import { BrowserRouter } from 'react-router-dom';
import Search from './components/Search';
  
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <img src="https://media.tenor.com/I7GuZXfrYmkAAAAj/peach-goma.gif"  alt="" /> 
    <h1>Recipe'S Point</h1>
    {/* <h5>Search here either by dish or ingredient <span><img src="https://c.tenor.com/R-XD3lUdfccAAAAM/integet%C5%91szemek-waving.gif" alt="" /></span></h5> */}
      <Search />
       <Category/>
       <Pages />
    </BrowserRouter>
    </div>
  );
} 

export default App;
