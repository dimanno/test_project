import {
    BrowserRouter,
    Link,
    Route
} from 'react-router-dom'

import './footer.css';

export function Footer() {

    return (
        <BrowserRouter>
            <div>
                <Link to={'/users'}>Home</Link>
            </div>
        </BrowserRouter>

    )
}
