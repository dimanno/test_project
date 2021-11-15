
import './App.css';
import {Footer} from "./components/footer/footer";
import {UsersList} from "./components/Users_list/users.list";
import {CreateForm} from "./components/create_form/create.form";
import {Header} from "./components/header/header";

function App() {
    return (
            <div className="App">
                <Header/>
                <div className={'container'}>
                    <UsersList/>
                    <CreateForm/>
                </div>
                <Footer/>
            </div>
    );
}

export default App;
