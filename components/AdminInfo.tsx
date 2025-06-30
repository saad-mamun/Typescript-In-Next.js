import { Info } from "./UserInfo";


// & sign er por admin k add kora hoyse
type AdminInfoList = Info & {
    admin: string;
    employer: string
}

const AdminInfo = ({
  username,
  email,
  age,
  location,
  admin, 
  employer
}: AdminInfoList) => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Admin Info</h1>
      <ul>
        <li>{username}</li>
        <li>{email}</li>
        <li>{age}</li>
        <li>{JSON.stringify(location)}</li>
        <li>{admin}</li>
        <li>{employer}</li>
      </ul>
    </div>
  );
};

export default AdminInfo;
