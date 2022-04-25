import './App.css';
import {
  Greet,
  Heading,
  PersonList,
  Status,
  Oscar,
  Button,
  Input,
  Container,
} from './components';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Person } from './components/Person';
import { Counter } from './components/state/Counter';
import { Box } from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';
import { DomRef } from './components/ref/DomRef';
import { MutableRef } from './components/ref/MutableRef';
function App() {
  const personName = {
    first: 'Clark',
    last: 'Kent',
  };

  const names = [
    { first: 'Mohamed', last: 'Amer' },
    { first: 'James', last: 'Bond' },
    { first: 'Bruce', last: 'Wayne' },
  ];
  return (
    <div className='App'>
      <Greet name='Atef' isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={names} />
      <Status status='loading' />
      <Heading>PlaceHolder</Heading>
      <Oscar>
        <Heading>React component inside</Heading>
      </Oscar>
      <Button handleClick={(event, id) => console.log('sd', event, id)} />
      <Input value='' handleChange={(event) => console.log(event)} />
      <Container styles={{ border: '1px solid black', padding: '1rem' }} />
      <Counter />
      <br />
      <br />
      <br />
      <br />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <br/>
      <br/>
      <br/>
      <br/>
      <UserContextProvider>
        <User/>
      </UserContextProvider>

      <DomRef></DomRef>
      <MutableRef></MutableRef>
    </div>
  );
}

export default App;
