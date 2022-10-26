import Pages from './pages/Pages';
import env from "react-dotenv";
import Category from "./components/Category";

  
function App() {
  return (
    <div className="App">
        <Category/>
       <Pages />
  
    </div>
  );
} 

export default App;
