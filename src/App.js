import { Outlet } from "react-router-dom";
import Header from "./components.js/Header";
import { Provider } from "react-redux";
import appStore from "./utils/AppStore";
const App=()=>{
  return(
    <Provider store={appStore}>
      <div>
         <Header/>
         <Outlet/>
      </div>
    </Provider>
      
  )
}
export default App;