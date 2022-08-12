import React, { useEffect, useState } from "react";
import { data } from "../../data";
import Print from "./Print";

// giá trị khởi tạo ban đầu của list page ở dưới
const listPageDefault = [];
let count = 0;
data.forEach((item, index) => {
  if ((index + 1) % 10 === 0) {
    count = count + 1;
    return listPageDefault.push({
      id: count,
      name: count -1,
      active: false,
    });
  }
});

export default function Page() {
  const [listPage, setListPage] = useState([...listPageDefault]);
  console.log(listPageDefault);
  // các trang
  const [page, setPage] = useState({
    id: 1,
    name: 0,
    active: true,
  });

  
  const [oldPage,setOldPage] = useState({})
 
  const handlePage = (index, ids) => {
    setOldPage({
        id : page.id,
        name: page.name,
        active: false
    }) 
   
     
    console.log("old",oldPage)
    setPage({
      id: ids,
      name: index,
      active: true,
    });
  };

  //  danh sách tên các page

//   console.log("dshgdsa", listPage);
  useEffect(() => {
    listPageDefault.splice(oldPage.name, 1,oldPage);   // thay tk cũ từ true thành false
    listPageDefault.splice(page.name, 1,page);   // truyền tk mới vào
    setListPage([...listPageDefault]);

  }, [page]);



  const [listPrint, setlistPrint] = useState(
    data.filter((item) =>  item.id <= 10)
  );

  useEffect(() => {
    setlistPrint(
      data.filter(
        (item) => item.id <= page.id * 10 && item.id > page.id * 10 - 10
      )
    );
    console.log('list',listPrint)
  }, [page]);

 


  return (
    <>
        <Print listPage = {listPage} page={page} listPrint={listPrint}/>


      <div className="d-flex justify-content-center p-3">
      {listPage.map((item, index) => (
        <div key={index} className="">
          {item.active ? (
            <button
              className="active btn btn-primary m-2"
              onClick={() => handlePage(item.name, index + 1)}
            >
              {item.name + 1}
            </button>
          ) : (
            <button className="btn btn-primary m-2" onClick={() => handlePage(item.name, index + 1)}>
              {item.name + 1}
            </button>
          )}
        </div>
      ))}
      </div>
    </>
  );
}