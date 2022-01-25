import React, { useMemo, useState } from "react";
import users from "./MOCK_DATA.json";

interface Props {}

const Index: React.FC<Props> = (props) => {
  const [keyword, setKeyword] = useState("");
  const [input2, setInput2] = useState("");
  const filteredUsers = users.filter((user) => {
    console.log("filtering");
    const lowerCaseKeyword = keyword.toLowerCase();
    return (
      user.gender.toLowerCase().includes(lowerCaseKeyword) ||
      user.first_name.toLowerCase().includes(lowerCaseKeyword) ||
      user.last_name.toLowerCase().includes(lowerCaseKeyword) ||
      user.gender.toLowerCase().includes(lowerCaseKeyword) ||
      user.ip_address.toLocaleLowerCase().includes(lowerCaseKeyword)
    );
  });
  // const filteredUsers = useMemo(() => {
  //   return users.filter((user) => {
  //     console.log("filtering");
  //     const lowerCaseKeyword = keyword.toLowerCase();
  //     return (
  //       user.gender.toLowerCase().includes(lowerCaseKeyword) ||
  //       user.first_name.toLowerCase().includes(lowerCaseKeyword) ||
  //       user.last_name.toLowerCase().includes(lowerCaseKeyword) ||
  //       user.gender.toLowerCase().includes(lowerCaseKeyword) ||
  //       user.ip_address.toLocaleLowerCase().includes(lowerCaseKeyword)
  //     );
  //   });
  // }, [keyword]);
  return (
    <div>
      <h1>Search</h1>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="dummy"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />
      <table>
        <tr>
          <th>id</th>
          <th>first name</th>
          <th>last name</th>
          <th>email</th>
          <th>gender</th>
          <th>ip_address</th>
        </tr>
        {filteredUsers.map((user) => (
          <tr>
            <td>{user.id}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
            <td>{user.ip_address}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Index;
