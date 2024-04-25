import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { FetchData } from "./utils/redux/action";



function App() {
  const dispatch = useDispatch()
  const users = useSelector(storeData => storeData.user)
  return (
    <>
      <button onClick={()=>{dispatch(FetchData())}}>GET DATA</button>
      {users.map((e)=>{
        return <fieldset key={e.id}>
          <legend>{e.username}</legend>
          <h1>{e.name}</h1>
          <h1>{e.email}</h1>
        </fieldset>
      })}
    </>
  );
}

export default App;
