import {useEffect} from 'react'

// import All Of Data
import dropdownItem from '../../data/data-layout/Header/data-dropdownItem.json';
import {HeaderLogo, HeaderLogo2} from "../../utils/allImgs"

import {Addshrink , moveSmooth} from "../../utils/"

import './header.css'

import Preloader from '../../components/Preloader'

import SecHeader from './SecHeader'


const Header = ({Title}) => {

  useEffect(() => {
      Addshrink()
  },[])

  useEffect(() => {
      moveSmooth()
  },[])

  return (
    <>
      <Preloader Title={Title} />
      <SecHeader HeaderLogo={HeaderLogo} HeaderLogo2={HeaderLogo2} dropdownItem={dropdownItem} />
    </>
  );
}

export default Header;