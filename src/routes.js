import { Switch, Route } from 'react-router-dom';

import Error404 from './pages/Errors/Error404';
import Disabled from './pages/Errors/Disabled';
import Pesquisa from './pages/Pesquisa'

function Routes() {
  return (
    <div className="container-lg">
      <Switch>

        <Route path='/pesquisa' component={Pesquisa} />
        <Route path='/contact' component={Disabled} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default Routes;
