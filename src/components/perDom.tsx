import React,{ ReactDOM  } from 'react'
// import header from '../images/header'
import "./virtualList.css"
import header from './images/header.jpeg'
type perDomParam = {
    ifInViewPoint?:boolean
}
export default function perDom(item:perDomParam){
    const {ifInViewPoint=false}=item
    return <img alt='' className='per-Dom' src={ifInViewPoint?header:''}></img>
}