type aboutPersonProps = {
  aboutPerson: {
    name: string;
    age: number;
    isAdult: boolean;
    country: string;
  }[];
};

const DualPc = ({ aboutPerson }: aboutPersonProps) => {
  return (
    <div>
      {aboutPerson.map((person) => {
        return (
          <>
            <h2>
              {" "}
              My Name is: {person.name} & I am {person.age} yars old. I live in{" "}
              {person.country}
            </h2>
          </>
        );
      })}
    </div>
  );
};

export default DualPc;
