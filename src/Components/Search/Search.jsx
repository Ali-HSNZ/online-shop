import Styles from './Search.module.css'
import {BiX , BiSearch} from "react-icons/bi";
import {NavLink } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import { AiFillCaretUp ,AiFillCaretLeft } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { windowIsSearch } from '../../feature/window/windowReducer';
import { useDispatch } from 'react-redux';



const SearchComponent = ()=>{

    const dispatch = useDispatch()
    
    const searchInputRef = useRef()

    const [searchValue , setSearchValue] = useState("")

    useEffect(()=>{
        searchInputRef.current.focus()
    },[])

    return(
        <>
            <div className={Styles.parent} onClick={()=>dispatch(windowIsSearch(false))}></div>
            <div className={Styles.centerSearch}>
                <div className={Styles.mainSearch}>

                <div className={Styles.arrow}>
                    <AiFillCaretUp size="2em"/>
                </div>

                    <div className={Styles.header}>
                        <button onMouseUp={()=>dispatch(windowIsSearch(false))}>
                            <BiX size="2em"/>
                        </button>
                        <p className={Styles.title}>جستجو محصول</p>   
                    </div> 

                    <div className={Styles.group}>
                        <div className={Styles.inputName} dir="rtl">
                            <p className={Styles.groupName} dir="rtl">نام محصول : </p> 
                            <div className={Styles.infoParent}>
                                <BsInfoCircleFill className={Styles.info} size="1.1em"/>
                                <div className={Styles.infoTextParent}>
                                    <p className={Styles.infoText} >نام محصولی که دنبال آن میگردید را وارد کنید. </p>
                                    <AiFillCaretLeft size="1.4em" className={Styles.iconArrow}/>
                                </div>
                            </div>
                        </div>
                        <input type="text" ref={searchInputRef} style={{border:'1px solid gray'}} value={searchValue} placeholder="جستجو محصول..." dir="rtl" onChange={ e => setSearchValue(e.target.value)}/>
                        <div className={Styles.inputIcon}> <BiSearch size="1.2em"/> </div>
                    </div>

                    <NavLink to={`/search?productName=${searchValue}`} className={Styles.submitSearchBtn} onClick={()=> dispatch(windowIsSearch(false))}>جستجو</NavLink>
            
                </div>
            </div>
        </>
    )
}

export default SearchComponent