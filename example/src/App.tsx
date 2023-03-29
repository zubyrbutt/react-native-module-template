import React, { useEffect } from 'react'
import RNModuleTemplateModule, { TestNotification } from 'rn-notifee-hooks'

const App = () => {
  useEffect(() => {
    console.log(RNModuleTemplateModule)
  })

  return <TestNotification />
}

export default App
