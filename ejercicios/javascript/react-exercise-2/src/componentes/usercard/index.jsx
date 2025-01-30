import PropTypes from 'prop-types';
import './style.css';

function Card({ robot }) {
  if (!robot) return null;

  return (
    <div className='card_container'>
      <div className='card_pic'> 
        <img alt={robot.firstName} src={robot.image} />
      </div>

      <section className='card_info'>
        <h1>{robot.firstName} {robot.lastName}</h1>
        
        <article>
          <p>Gender</p>
          {robot.gender}
          <section className='gender'>
            {robot.gender === 'male' && <div className='male'>Male</div>}
            {robot.gender === 'female' && <div className='female'>Female</div>}
          </section>
        </article>

        <article>
          <p>Mobile Number</p>
          <p>{robot.phone}</p>
        </article>

        <article>
          <p>Date of Birth</p>
          <p>{robot.birthDate}</p>
        </article>
      </section>
    </div>
  );
}

Card.propTypes = {
  robot: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    birthDate: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
};

export default Card;