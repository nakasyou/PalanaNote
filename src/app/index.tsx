import { h, render } from "preact";
import { useContext } from "preact/hooks";
import context from "./context.ts";
import Notes from "./components/notes/index.tsx";

export default ()=>{
  const App = () => {
    return (<div>
      <context.Provider value="a">
        <Notes/>
      </context.Provider>
    </div>)
  };
  render(<App />, document.getElementById("app"));
}
