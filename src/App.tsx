import './App.css';
import {
  Greet,
  Heading,
  PersonList,
  Status,
  Oscar,
  Button,
  Input,
  Container
} from './components';
import {Person} from "./components/Person"

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
      <Container styles={{border:'1px solid black',padding:'1rem'}}/>
    </div>
  );
}

export default App;
