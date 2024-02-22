import React from 'react';
import { useHistory } from 'react-router-dom'; // Assuming you're using React Router for navigation

function ManagerDashboard() {
  const history = useHistory();

  const handleLeftButtonClick = () => {
    // Redirect to the left page
    history.push('/left-page'); // Replace '/left-page' with the actual path of the left page
  };

  const handleRightButtonClick = () => {
    // Redirect to the right page
    history.push('/right-page'); // Replace '/right-page' with the actual path of the right page
  };

  return (
    <div>
      <div style={{ position: 'absolute', top: 10, left: 10 }}>
        <button onClick={handleLeftButtonClick}>Left Page</button>
      </div>
      <div style={{ position: 'absolute', top: 10, right: 10 }}>
        <button onClick={handleRightButtonClick}>Right Page</button>
      </div>
      <h1>Welcome to Tenant Dashboard</h1>
      {/* Add your dashboard content here */}
    </div>
  );
}

export default ManagerDashboard;
