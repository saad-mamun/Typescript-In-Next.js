// akhane 3 ta page nia kaj ora hoyse
//1.page.tsx
// 2.UserInfo.tsx
//3.AdminInfo.tsx

export  type Info = {
    username: string;
    email: string;
    age:number;
    location: string[]
}

const UserInfo = ( { username, email, age, location } : Info ) => {
  return (
    <div>
      <h1 className="font-bold text-2xl">User Info</h1>
      <ul>
        <li>{username}</li>
        <li>{email}</li>
        <li>{age}</li>
        <li>{JSON.stringify(location)}</li>
      </ul>
    </div>
  );
}

export default UserInfo
