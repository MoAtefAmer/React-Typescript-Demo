import React from 'react';
import { useContext } from 'react';
import { UserContext } from './UserContext';

export const User = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {

      userContext.setUser({ name: 'mohamed', email: 'mohasd' });
    
  };
  const handleLogout = () => {
     
          userContext.setUser(null)
      
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>Username is {userContext.user?.name} </div>
      <div>User email is {userContext.user?.email} </div>
    </div>
  );
};
