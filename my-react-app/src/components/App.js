import Form from "./components/Form";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";
import Sidebar from "./components/Sidebar";

function App(){
    return(
        <div>
            <Form/>
            <Modal/>
            <Navbar/>
            <Notes/>
            <Sidebar/>
        </div>
    )
}
export default App