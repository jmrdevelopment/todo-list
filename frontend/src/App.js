import { Route, Switch } from 'react-router-dom';

import Todos from './pages/Todos';

function App() {
    return (
        <Switch>
            <Route path="/" children={<Todos />} />
        </Switch>
    );
}

export default App;
