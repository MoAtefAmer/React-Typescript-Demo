type HeadingProps = {
  children: string;
};

export const Heading = ({children}: HeadingProps) => {
//   const { children } = props;
  return (
    <div>
      <h2>{children}</h2>
    </div>
  );
};
