import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Tab from "../../common/component/tab";
import getWorks from "../../store/action/getWorks";
import login from '../../store/action/login';
import "../../common/css/index.css"
import Course from './course';
import Vip from './vip';
import Miaov from './miaov';
import Works from './works';
import Frame from '../../common/component/frame';
let imgData = [
  require("../../common/images/tab/img1.png"),
  require("../../common/images/tab/img2.png"),
  require("../../common/images/tab/img3.png"),
  require("../../common/images/tab/img4.png")
]
function Index(props) {
  let [page, setPage] = useState(1);
  let { dispatch } = props;
  console.log(props)
  function getWorksData() {
    let p = dispatch(getWorks(page))
    setPage(++page);
    return p;
  }
  useEffect(() => {
    getWorksData();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <Frame 
    pullUp = {true}
    getData = {getWorksData}
    >
      <div>
        <Tab
          data={imgData}
          render={(data) => {
            return <img src={data} />

          }}
        />
        <section className="index_content">
          <Course />
          <Vip />
          <Miaov />
          <Works {...props}/>
        </section>
      </div>
    </Frame>

  );
}

export default connect(props => ({ ...props.works }))(Index);
