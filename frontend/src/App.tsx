import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store';
import AssignmentList from './components/AssignmentList';
import GradeList from './components/GradeList';
import LoginComponent from './components/Login';
import './index.css';

const App = () => (
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/login" element={<LoginComponent />} />
                <Route path="/assignments" element={<AssignmentList />} />
                <Route path="/gradelist" element={<GradeList />} />
            </Routes>
        </Router>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

export default App;