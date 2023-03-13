import React from 'react';

const Card = ({ name, price, reviews, description, contact }) => {
  return (
    // <div className="card">
    //   <img src={image} alt={name} className="card-img-top" />
    //   <div className="card-body">
    //     <h5 className="card-title">{name}</h5>
    //     <p className="card-text">{description}</p>
    //     <div className="card-details">
    //       <div className="card-price">Price: {price}</div>
    //       <div className="card-contact">Phone: {contact.phone}</div>
    //       <div className="card-contact">Email: {contact.email}</div>
    //       <div className="card-user">User: {user}</div>
    //     </div>
    //   </div>
    // </div>

    //   <div className='card-container'>

    //       <div className='card'>
    //           <img className='card--img' src={`./${image}`} alt={name} />
    //           <div className='card--stats'>
    //               <img className='card--ratingLogo' src='./rating-logo.png' alt='not found' />
    //               <p className="card-text">{description}</p>
    //           </div>
    //           <p className='price'>
    //               <span className='bold-text'>Rs {price}</span>/month
    //           </p>
    //           <div className='card-details'>
    //               <div className='card-contact'>Phone: {contact.phone}</div>
    //               <div className='card-contact'>Email: {contact.email}</div>

    //           </div>
    //       </div>
      //   </div> 

      <div className='card-container'>
          <div className='card'>
              <div className='card--details'>
                  <div className='card--stats'>

                      <p className='card-text'>{description}</p>
                  </div>
                  <p className='price'>
                      <span className='bold-text'>Rs {price}</span>/month
                  </p>
                  <div className='card-details'>
                      <div className='card-contact'>Phone: {contact.phone}</div>
                      <div className='card-contact'>Email: {contact.email}</div>
                  </div>
              </div>
          </div>
      </div>

  );
};

export default Card;