import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Frame from '../../common/component/frame';
import "../../common/css/teacher.css";
import getLecturers from '../../store/action/getLecturers';
import LecturerTab from './tab'
import Join from './join'
import Footer from './footer';
function Lecturer(props) {
  let { data, dispatch } = props;
  let newData = [];
  for (let i = 0; i < data.length; i += 3) {
    let newArr = [];
    let end = i + 3;
    end = end > data.length ? data.length : end;
    // data[i]&&newArr.push(data[i])
    // data[i+1]&&newArr.push(data[i+1])
    // data[i+2]&&newArr.push(data[i+2])
    for (let j = i; j < end; j++) {
      newArr.push(data[j])
    }
    newData.push(newArr)
  }
  useEffect(() => {
    dispatch(getLecturers())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(data)
  return (
    <Frame>
      <div className="teacher_banner">
        <h2><span>妙味团队</span></h2>
        <LecturerTab
          data={data}
          newData={newData}
        />
      </div>
      <Join />
      <Footer />
    </Frame>);

}

export default connect(state => state.lecturers)(Lecturer);
