import React from 'react'
import pics1 from "../assets/Frame1.png"  
import pics2 from "../assets/Frame2.png"  
import pics3 from "../assets/Frame3.png"  

function Card() {
    const cardData=[
        {image:pics1,title:'Air Freight', content:'As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation...'},
        {image:pics2,title:'Sea Freight', content:'Sea Freight plays perhaps the most vital role in most transportation and supply chain a solutions...'},
        {image:pics3,title:'Land Freight', content:'Cargo are transported at some stage of their journey along the world’s roads where we give...'},
    ]
  return (
    <>
      <div className="row">
        {cardData.map((Card,index) =>(
            <div className="col-md-4 mb-5" data-aos="fade-up">
          <div className="card" >
             <img src={Card.image} className="card-img-top" alt="..."/>
             <div className="card-body">
            <h4 className="card-title">{Card.title}</h4>
            <p className="card-text">{Card.content} <a href=""className='text-danger text-decoration-none'>Read more</a> </p>
            
          </div>
        </div>

        </div>
        ))}
        

        

      </div>  
    </>
  )
}

export default Card