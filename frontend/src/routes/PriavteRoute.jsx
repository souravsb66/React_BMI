import React from 'react'
import {useSelector} from "react-redux"
import {useNavigate, Navigate} from "react-router-dom";

const PriavteRoute = ({children}) => {

  const {isAuth} = useSelector((state) => state.authReducer);
  const navigate = useNavigate();

  return isAuth ? children : <Navigate to={"/login"} />;
  
}

export default PriavteRoute