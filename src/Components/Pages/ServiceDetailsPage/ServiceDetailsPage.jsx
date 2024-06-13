import React from 'react'
import "./ServiceDetailsPage.scss"
import { Link} from 'react-router-dom' 
import ServiceDetails from '../../components/ServiceDetails/ServiceDetails'
export default function ServiceDetailsPage() {
  return (
   < div id='serviceDetails' className='col-12'>
         <section id='sec1' className="col-12">
        <h1>Service Details</h1>
        <br></br>
    
        <div className="HomeAbout">
          <Link className="link" to="/">
            Home
          </Link>
          <div className="About">
            <p>/</p>
            <p>Service Details</p>
          </div>
        </div>
      </section>

      <ServiceDetails/>

  </div>
  )
}
