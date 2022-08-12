import React from "react";

export default function Sort({sortBy}) {
  
  return (
    <button
      style={{ height: "61%", marginTop: "24px", marginLeft: "10px" }}
      className="btn btn-primary"
      onClick={()=>{
        sortBy()
      }
    }
    >
      Sắp xếp lại
    </button>
  );
}
