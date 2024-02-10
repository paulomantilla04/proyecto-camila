import React from 'react'
import SectionA from './SectionA'
import SectionB from './SectionB'
import SectionC from './SectionC'
import SectionD from './SectionD'
import SectionF from './SectionF'

const Start = () => {
  return (
    <main className="flex flex-col items-center select-none h-screen">
        <SectionA/>
        <SectionB/>
        <SectionD/>
        <SectionF/>
    </main>
  )
}

export default Start