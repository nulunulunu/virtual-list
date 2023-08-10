import React,{useEffect, useState} from "react";
import PerDom from "./perDom";
export default function LazyLoad(){
    const [_virtualDom,set_virtualDom] = useState(new Array(100).fill({ifInView:false}))
    function initDom(){
        handleScroll()
    }
    function handleScroll(){
        const scrollTop = document.documentElement.scrollTop
        let heng = Math.floor(document.body.clientWidth / 180)
        let shu = Math.floor(window.screen.height / 180)
        const viewed= Math.ceil((scrollTop+window.screen.height)/180)*heng
        const new_dom = _virtualDom.map((item,index)=>{
            if(viewed>index){
                return {
                    ifInView:true
                }
            }
            return {
                ifInView:false
            }
        })
        set_virtualDom(new_dom)

    }
    function getIfInView(index:number):boolean{
        const scrollTop=document.body.scrollTop
        let heng = Math.floor(document.body.clientWidth / 180)
        let shu = Math.floor(window.screen.height / 180)
        const viewed= Math.ceil((scrollTop+window.screen.height)/180)*heng
        return viewed>index
    }
    useEffect(()=>{
        initDom()
        window.addEventListener('scroll',handleScroll)
    },[])
    return (<>
        {
            _virtualDom.map((item,index)=>{
                if(item.ifInView){
                    console.log(index)
                }
                return <PerDom key={index} ifInViewPoint={item.ifInView} />
            })
        }
    </>)
}