//  PROPS.....


// {props} : {name: string, age: number, } 
//1. prothome props newahosilo 

//{name, age} : {name: string, age: number, }
//2. direct distucturing korahoy clean code er jonno

type UserShape = { name: string, age: number }
// 3. custom bhabeo korajai

// interface UserShape  {
//      name: string;
//       age: number
//      };
// 4. last way to use props 


const User = ({ name, age }: UserShape) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
    </div>
  );
};

export default User


