import React,{useEffect} from 'react';
import {connect} from 'react-redux'
import "../../common/css/miiaov.css";
import Frame from "../../common/component/frame";
import Skelecton from "../../common/component/skeleton";
import Tab from "../../common/component/tab";
import getWork from "../../store/action/getwork"


function Work(props) {
  
  let {data,loading,dispatch,match} = props;
  let {id} = match.params;

  console.log(data)
  
  useEffect(()=>{
    dispatch(getWork(id))
    return ()=>{
      dispatch({
        type:'WORK_RESET'
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div>
      <Frame> 
        {
          loading?<Skelecton />:(<div className="workDetails">
            <Tab 
              data={data.image_path.map(item=>item.path)}
              render={src=><img src={src} />}
            />
          </div>)
        }
      </Frame>
      <footer className="miiapv_footer">
        回复本帖
      </footer>
    </div>

  );
}

export default connect(state=>({...state.work}))(Work) ;
