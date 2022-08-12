import React, { useEffect, useState } from "react";
import { usersData } from "../../data";

export default function Print({ listPage, page ,listPrint}) {
  
  return(
    // listPrint.map((item,index) => 
    // <div key={index}>
    
            <div className="row">
      <div className="table-list-users">
        <table className="table table-hover table-info text-start">
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Birthday</th>
              <th>Salary</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody className="table table-success">
            {listPrint.map((item, index) => (
              <tr key={index}>
                <th>{item.id}</th>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{`${new Date(item.birthday).getDate()}/${
                  new Date(item.birthday).getMonth() + 1
                }/${new Date(item.birthday).getFullYear()}`}</td>
                <td>{item.salary}</td>
                <td>{`(+84)${item.phone.replace(/-/g, "")}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    // </div>
  )
  // ) 
}
