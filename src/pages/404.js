import React from 'react'
import giphy from '../assets/giphy.gif'

const NotFoundPage = () => (
  <div className="pageNotFound">
    <div className="animated bounceIn">
      <h1>Oopps.. Page Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist.</p>
      <img src={giphy} width="480" alt="excite" />
    </div>
  </div>
)

export default NotFoundPage
