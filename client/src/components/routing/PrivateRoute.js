import React, { useContext } from 'react'
import { Route, useNavigate } from 'react-router-dom';
import AuthContext from '../context/auth/authContext'

function PrivateRoute({ children }) {
    const authContext = useContext(AuthContext);
    const { isAuthenticated, loading } = authContext;
    const navigate = useNavigate();

    return !isAuthenticated && !loading ? navigate('/login'): children;
}

export default PrivateRoute;