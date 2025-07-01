// "use client";
// use client use for ElementWrapper

import UseReducer from "@/components/UseReducer";
import UseEffect from "@/components/UseEffect";



// import Button from "@/components/Button";
// import { primaryButtonProps, secondaryButtonProps } from "@/components/Button";


// import AdminInfo from "@/components/AdminInfo";
// import MyFC from "@/components/FC";
// import MyChildren from "@/components/MyChildren";
// import User from "@/components/User";
// import UserInfo from "@/components/UserInfo";
// import Counter from "@/components/Counter";
// import From from "@/components/From";
// import ElementWrapper from "@/components/ElementWrapper";

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

      {/* <Counter/>
      <From/> */}

      {/* Element Wrapper page */}
      {/* <ElementWrapper elementType="div" classname="box">
        <p>THIS IS A DIV ELEMENT WITH A NAME OF BOX</p>
      </ElementWrapper>
      <ElementWrapper elementType="button" onClick={() => alert("Button called")}>
        Click Here
      </ElementWrapper> */}

      {/* <Button {...primaryButtonProps} />
      <Button {...secondaryButtonProps} /> */}

     <UseReducer/>
     <UseEffect/>

    </section>
  );
};

export default HomePage;
