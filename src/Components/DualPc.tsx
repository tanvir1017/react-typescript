import { aboutPersonProps } from "./Person.types";

const DualPc = ({ aboutPerson }: aboutPersonProps) => {
  return (
    <div>
      {aboutPerson.map((person) => {
        return (
          <>
            <h2 key={person.name}>
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
