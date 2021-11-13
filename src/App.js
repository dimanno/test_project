
import './App.css';
import {Footer} from "./components/footer/footer";
import {UsersList} from "./components/Users_list/users.list";

function App() {
    return (
            <div className="App">
                <UsersList/>
                <Footer/>
            </div>
    );
}

export default App;
