import PropTypes from 'prop-types';
import "./style.css";
import Card from "../usercard";

function UserList({ robots }) {
  if (!robots?.length) {
    return <div className="no-robots">No robots found</div>;
  }

  return (
    <div className="user-list">
      {robots.map((robot) => (
        <Card 
          key={robot.id} 
          robot={robot} 
        />
      ))}
    </div>
  );
}

UserList.propTypes = {
  robots: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  ).isRequired
};

export default UserList;