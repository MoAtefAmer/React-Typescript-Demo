type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
    const {messageCount =0} =props
  return (
    <div>
      <h1>
        {props.isLoggedIn
          ? `Greetings ${props.name}  you have ${messageCount} unread messages`
          : 'Welcome Guest'}{' '}
      </h1>
    </div>
  );
};
