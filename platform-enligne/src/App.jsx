import Sidebar from "./components/SideBar";
import MainContent from "./components/MainContent";
import {useSelector,useDispatch} from "react-redux" ; 

function App() {
  const activeItem = useSelector(
    (state) => state.ActiveItem.activeItem
  );

  const currentContent = useSelector((state)=>state.ActiveItem.activeItem) ; 

console.log(currentContent)
  return (
    <div className="flex">
      <Sidebar />
      <MainContent data={currentContent} />
    </div>
  );
}

export default App;
