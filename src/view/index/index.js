import React from 'react';
import { connect } from 'react-redux';
import Tab from "../../common/component/tab"
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
  // console.log(props);
  return (
    <Frame>
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
          <Works />
        </section>
      </div>
    </Frame>

  );
}

export default connect(props => ({...props.works}))(Index);
