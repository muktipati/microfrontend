import React,{useEffect} from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Dashboard from './components/Dashboard';
import { store } from './store/index';
import { fetchData } from './store/actions/dashboard-action';
// import { useDispatch, useSelector } from 'react-redux';

const generateClassName = createGenerateClassName({
  productionPrefix: 'da',
});

const App =  ({ history }) => {
  
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.dashboarddata);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
          <Route path="/dashboard">
            <Dashboard data={data} />
          </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

const AppWithRedux = ({ history }) => (
  <Provider store={store}>
    <App history={history} />
  </Provider>
);
export default AppWithRedux;