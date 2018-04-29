import React from 'react'
import giphy from '../assets/giphy.gif'

const NotFoundPage = () => (
  <div className="pageNotFound">
    <h1 className="animated rubberBand">Oopps.. Page Not Found</h1>
    <p className="animated rubberBand">
      You just hit a route that doesn&#39;t exist.
    </p>
    <img src={giphy} width="480" alt="excite" />
  </div>
)

export default NotFoundPage
