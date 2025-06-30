// import AdminInfo from "@/components/AdminInfo";
// import MyFC from "@/components/FC";
// import MyChildren from "@/components/MyChildren";
// import User from "@/components/User";
// import UserInfo from "@/components/UserInfo";

import Counter from "@/components/Counter";

const HomePage = () => {
  return (
    <section className="p-3">
      <h1>Hello this is home page</h1>
      {/* <User name="Liton" age={20} />
      <MyChildren>
        <p>This is a Children</p>
      </MyChildren>
      <MyFC name="Mamun" age={21} />

      <UserInfo
        username="Saad"
        email="ale@gmail.com"
        age={21}
        location={["Earth", " Bangladesh"]}
      />
      <AdminInfo
        username="Mamun"
        email="mamun@gmail.com"
        age={20}
        location={["Mars", "UnKnown"]}
        admin="Yes"
        employer="Yes"
      /> */}

      <Counter/>
    </section>
  );
};

export default HomePage;
