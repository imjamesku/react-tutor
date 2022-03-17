import React, { useMemo, useState } from "react";

interface Props {}

const Sorting: React.FC<Props> = (props) => {
  const [arr, setArr] = useState([
    new Date("2020-02-21"),
    new Date("2020-03-21"),
    new Date("2021-02-21")
  ]);

  const [strArr, setStrArr] = useState([
    "1",
    "11",
    "111",
    "11111",
    "22222222",
    "2",
    "99"
  ]);

  const [nums, setNums] = useState([1, 99, 88, 3, 4, 1000, 876]);

  // const sortedArr = arr.slice().sort((a, b) => {
  //   return a.getTime() - b.getTime();
  // });

  const sortedArr = useMemo(() => {
    return arr.slice().sort((a, b) => {
      return a.getTime() - b.getTime();
    });
  }, [arr]);

  const sortedStrArr = useMemo(
    () => strArr.slice().sort((a, b) => a.length - b.length),
    [strArr]
  );

  const sortedNums = useMemo(() => nums.slice().sort((a, b) => b - a), [nums]);

  // useMemo
  // 3, 1
  //a == 3, b== 1
  // a-b => 2
  // b, a
  return (
    <div>
      <h1>test</h1>
      <a href="https://github.com/imjamesku/react-tutor/blob/main/react/src/pages/Sorting.tsx">
        程式碼連結
      </a>
      <h2>日期排序</h2>
      <ul>
        {sortedArr.map((item, idx) => (
          <li key={idx}>{item.toDateString()}</li>
        ))}
      </ul>
      <h2>依照長度排序string</h2>
      <ul>
        {sortedStrArr.map((str, idx) => (
          <li key={idx}>{str}</li>
        ))}
      </ul>
      <h2>依照大小排序數字</h2>
      {sortedNums.map((n, idx) => (
        <li key={idx}>{n}</li>
      ))}
    </div>
  );
};

export default Sorting;
