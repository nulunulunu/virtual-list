import React,{useEffect, useState} from "react";
import PerDom from "./perDom";

export default function VirtualList(){
    const maxNums = 10000

    const screenConcludeNums = getScreenNums()
    const _array = new Array(maxNums).fill(234)
    const [_valueControl,set_ValueControl]=useState({
        visibleData:_array.slice(0,screenConcludeNums),
        offset:0
    })
    const _height = getAllHeight()
    function getScreenNums(){
        let heng = Math.floor(document.body.clientWidth / 180)
        let shu = Math.floor(window.screen.height / 180)+1
        // return 10000
        return heng*shu
    }
    function getAllHeight(){
        let hengNum= Math.floor(document.body.clientWidth / 180)
        let shuNum = Math.round((10000/hengNum))
        return shuNum*180
    }
    function updateNewList(){
        //获取index
        //获取offset
        //获取scroll滑动距离
        const scrollTop =document.documentElement.scrollTop
        const totalHiddenItem = Math.floor(scrollTop/180) //就是说有多少排
        const nextOffset= totalHiddenItem*180
        const nextIndex = totalHiddenItem*Math.floor(document.body.clientWidth / 180)
        const nextVisibleData = _array.slice(nextIndex,nextIndex+screenConcludeNums)
        console.log(nextIndex,'ffffff')
        set_ValueControl({
            visibleData:nextVisibleData,
            offset:nextOffset
        })


    }
    function handleScroll(){
        console.log('aaaaaaa')
        updateNewList()
    }
    function fangDouHandleScroll(item:()=>void){ //对滑动函数进行防抖处理
        //在虚拟列表中需不需要用到防抖；
        var timeOut:any = null
        return function(){
            clearTimeout(timeOut)
            timeOut=setTimeout(() => {
                item()
            }, 1000);
            
        }
    }
    const _fangDouFunc = fangDouHandleScroll(handleScroll)
    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
    },[])
    return (<div style={{height:_height}}>
       <div style={{paddingTop:_valueControl.offset}}>
        { _valueControl.visibleData.map((item,index)=>{
            return <PerDom key={index} />
        })}
       </div>
    </div>)

}