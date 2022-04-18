import {Name} from "./Person/Person.types"


// type PersonListProps = {
//   names: Array<{ first: string; last: string }>;
// };

// -----------------or------------------------

type PersonListProps = {
  names: Name[];
};

export const PersonList = ({names}: PersonListProps) => {
//   const { names } = props;
  return (
    <div>
      {names.map((name) => {
        return (
          <h2 key={name.first}>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
};
