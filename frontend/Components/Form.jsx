import React from "react";
import { useState } from "react";
import connectbackend from "../src/api/connect";
import "./Form.css"
function Form() {
  const [data, setData] = useState({
    First_Name: "",
    Last_Name: "",
    Role: "",
    ProfileImg: "",
    LinkedIn: "",
    Twitter: "",
  });


  const handleAddData=(e)=>{
    const {name,value}=e.target;
    setData((prev)=>(
        {...prev,[name]:value}
    ))
  }

  const handleTheData=(e)=>{
    e.preventDefault();
    
    connectbackend
    .post("/postData", data)
      .then((res) => {
        alert("Data submitted successfully!");
        console.log(res.data);
        
        setData({
          First_Name: "",
          Last_Name: "",
          Role: "",
          ProfileImg: "",
          LinkedIn: "",
          Twitter: "",
        });
    })
  }

  return (
    <div>
      <form action="" onSubmit={handleTheData}>
        <input type="text" name="First_Name" placeholder="Enter Your FirstName" onChange={handleAddData} />
        <input type="text" name="Last_Name" placeholder="Enter Your LastName" onChange={handleAddData}/>
        <input type="text" name="Role" placeholder="Role" onChange={handleAddData}/>
        <input type="text" name="ProfileImg" placeholder="ProfileImg" onChange={handleAddData} />
        <input type="text" name="LinkedIn" placeholder="Enter LinkedIn Id" onChange={handleAddData} />
        <input type="text" name="Twitter" placeholder="Enter Twitter Id" onChange={handleAddData} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
