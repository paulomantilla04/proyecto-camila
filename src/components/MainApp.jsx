import React from 'react'
import SectionA from './SectionA'
import SectionB from './SectionB'
import SectionC from './SectionC'
import SectionD from './SectionD'
import SectionE from './SectionE'
import SectionF from './SectionF'

const MainApp = () => {
  return (
    <main className="flex flex-col items-center select-none h-screen">
        <SectionA/>
        <SectionB/>
        <SectionC/>
        <SectionD/>
        <SectionE/>
        <SectionF/>
    </main>
  )
}

export default MainApp