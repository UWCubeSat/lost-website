import React, { memo } from 'react'


const Notfound: React.FC = memo(() => (
  <div className={"font-bold text-red-600"}>
    <h1>404: Page Not Found</h1>
  </div>
))
Notfound.displayName = 'Notfound'

export default Notfound
