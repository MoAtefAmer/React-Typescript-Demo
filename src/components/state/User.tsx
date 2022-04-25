import { useState } from 'react';

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
    // Type assertion
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({ name: 'Moh', email: 'moh@gmail.com' });
  };
//   const handleLogout = () => {
//     setUser(null);
//   };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
      <div>User is {user.name}</div>
      <div>User is {user.email}</div>
    </div>
  );
};
