import React, { useState } from "react";
import Filter from "./component/Filter";
import ListUsers from "./component/ListUsers";
import Search from "./component/Search";
import SearchBy from "./component/SearchBy";
import Sort from "./component/Sort";
import { data } from "../data";
import { findBy } from "./component/Filter"
import Page from './component/Page';


export default function SimpleWeb() {

  const [findBy, setFindBy] = useState("")
  const [newData, setNewData] = useState([])
  const [sort, setSortBy] = useState(false)


  const searchBy = (e) => {
    const value = e.target.value
    const newResult = data.filter(item => item[findBy].toString() == value)
    setNewData(newResult)

  }

  const filterBy = (e) => {
    setFindBy(e.target.value)
  }

  const sortBy = (e) => {
    // setSortBy(!sort)
    console.log(sort)
    if (!sort) {

      let sx = data.sort((a, b) => {
        a.firstName.localeCompare(b.firstName)
        // sort?(a.firstName.localeCompare(b.firstName)):(a.firstName < b.firstName)
      })
      console.log(sx)

    }
    else{
      let sx = data
      console.log(sx)

    }
    // console.log(sx)
    console.log(findBy);

  }

  return (
    <div className="container">
      <div className="text-center m-3">
        <h1>A Simple Web App</h1>
      </div>
      <div className="d-flex justify-content-between mb-3">
        <Search searchBy={searchBy} />
        <div className="d-flex col-lg-5">
          <Filter filterBy={filterBy} />
          <Sort sortBy={sortBy} />
        </div>
      </div>
      {newData.length > 0 ? <SearchBy newData={newData} /> : <Page />}
    </div>
  );
}
