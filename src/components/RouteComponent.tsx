import { Routes as Switch, Route, Navigate } from "react-router-dom";
import Login from "./Login/Login";
import PageNotFound from "./PageNotFound/PageNotFound";
import AuthContext from "./context/AuthContext";
import { useContext } from "react";
import Task from "./Task/Task";
import Graph from "./Graph/Graph";

const ProtectedRoute = ({ children }:any) => {
  const myContext = useContext(AuthContext);
  let UserName:any =  localStorage.getItem('userName'); 
  
  if (!UserName) {
    myContext.handleLogout();
    return <Navigate to="/login" replace />;
  }

  return children;
};

function RouteComponent() {

  return (
    <Switch>
      <Route path="/" element={<Navigate to="/tasks" />} />
      <Route path="login" element={<Login />} />
      <Route path="tasks" element={<ProtectedRoute><Task /></ProtectedRoute>} />
      <Route path="graph" element={<Graph />} />
      
      <Route path="*" element={<PageNotFound />} />
    </Switch>
  )
}

export default RouteComponent