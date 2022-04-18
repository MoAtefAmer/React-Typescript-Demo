import { PersonProps } from "./Person.types";

export const Person = (props: PersonProps) => {
  const { first, last } = props.name;

  return (
    <div>
      {first} {last}
    </div>
  );
};
