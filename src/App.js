import './App.css';
// import Fragments from './Fragments';
import User from './User';

function App(data) {
  function parentAlert(data){
    alert(data);
  }
  return (
    <div className="App box marginTop marginBottem padding">
      <h1>Lifting state UP</h1>
      {/* <Fragments/> */}
      <User alert ={parentAlert}/>
    </div>
  );
}

export default App;
