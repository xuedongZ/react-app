import React from 'react';
import {connect} from 'react-redux';
import Tab from "../../common/component/tab"
import login from '../../store/action/login';
import "../../common/css/index.css"
let imgData =[
  require("../../common/images/tab/img1.png"),
  require("../../common/images/tab/img2.png"),
  require("../../common/images/tab/img3.png"),
  require("../../common/images/tab/img4.png")
]
function Index(props) {
  // console.log(props);
  return (<div>
    <Tab 
      data = {imgData}
      render = {(data)=>{
        return <img src={data} />

      }}
    />
  </div>
  );
}

export default connect(res=>{
  return res
})(Index);
