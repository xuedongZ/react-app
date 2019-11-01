import React, { useState, useEffect, useRef } from 'react';
import { useInnerHeight } from "../hook/index";
import BScroll from "better-scroll";
import Header from './header';
import Menu from './menu';
import '../css/reset.css';
import '../css/common.css';


export default function Frame(props) {
    const [showMenu, setShowMenu] = useState(false);
    const innerH = useInnerHeight();
    const wrap = useRef(null);
    let {pullUp,getData} = props; 
    let pageScroll = null;
    function changeShow() {
        setShowMenu(!showMenu);
    }
    function menuHide() {
        setShowMenu(false);
    }
    // console.log(props)
    useEffect(() => {
        // console.log(wrap)
        pageScroll = new BScroll(wrap.current,{
            preventDefaultException:{
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/
            },
            pullUpLoad:pullUp?{threshold:200}:false,
        });
        // console.dir(pageScroll);
        pageScroll.on('pullingUp',()=>{
            // console.log("上滑加载更多");
            getData().then(res=>{
                if(res){
                    pageScroll.finishPullUp();
                    pageScroll.refresh();
                } else {
                    pageScroll.closePullUp();
                }
               
            });
        })
    }, [])
    return (
        <div>
            <Header
                changeShow={changeShow}
            />
            <Menu 
                menuHide={menuHide}
            />
            <div id='main' style={{
                transform: `translateX(${showMenu ? 4.5 : 0}rem)`,
                height: innerH
            }}
                onTouchStart={() => {
                    menuHide();
                }

                }
            >
                <div className="pageWrap"
                    ref={wrap}
                >
                    <div>{props.children}</div>
                </div>
            </div>
        </div>
    )
}