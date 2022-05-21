import React from 'react'
import {ReactComponent as LogominiWhite} from '../../assets/img/logo/LogoWhite.svg';
import {ReactComponent as LogominiBlack} from '../../assets/img/logo/BlackCoffe.svg'

const Logomini = ({type = 'white'}) => {
  return (
    type === 'white' ? <LogominiWhite/> : <LogominiBlack/>
  )
}

export default Logomini
