type ArrayProps = {
  aboutPerson: {
    name: string;
    age: number | string;
    country: string;
    isAdult: boolean;
    position: string;
  }[];
};

const Array = ({ aboutPerson }: ArrayProps) => {
  return (
    <div>
      {aboutPerson.map((person) => {
        return <h2>{person.name}</h2>;
      })}
    </div>
  );
};

export default Array;
