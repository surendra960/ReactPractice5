import './App.css';
// import Fragments from './Fragments';
import User from './User';
import UseMemoHook from './UseMemoHook';

function App(data) {
  function parentAlert(data){
    alert(data);
  }
  return (
    <div className="App  marginTop marginBottem padding">
      <h1>Lifting state UP</h1>
      {/* <Fragments/> */}
      <User alert ={parentAlert}/>
      <UseMemoHook/>
    </div>
  );
}

export default App;
