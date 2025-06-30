
type UserShape = {
    params:{
         id: number
    }
}

const User = ({ params: { id } }: UserShape) => {
  return <div>User No {id}</div>;
};

export default User
