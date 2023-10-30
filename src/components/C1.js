import React, { useEffect, useState } from 'react';

function UserTable() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();

        if (Array.isArray(data)) {
          setUserData(data);
        } else if (data.users && Array.isArray(data.users)) {
          setUserData(data.users);
        } else {
          console.error('Invalid data structure in API response');
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ background: 'black' }}>
      <center>
        <h1 style={{ color: 'white' }}>Dummy Data</h1>
        <table style={{ border: '5px solid white' }}>
          <thead>
            <tr>
              <th style={{ border: '3px solid white', background: 'black', color: 'white' }}>Sno</th>
              <th style={{ border: '3px solid white', background: 'black', color: 'white' }}>Profile Pic</th>
              <th style={{ border: '3px solid white', background: 'black', color: 'white' }}>First Name</th>
              <th style={{ border: '3px solid white', background: 'black', color: 'white' }}>Last Name</th>
              <th style={{ border: '3px solid white', background: 'black', color: 'white' }}>Gender</th>
              <th style={{ border: '3px solid white', background: 'black', color: 'white' }}>E-mail</th>
              <th style={{ border: '3px solid white', background: 'black', color: 'white' }}>Username</th>
              <th style={{ border: '3px solid white', background: 'black', color: 'white' }}>Domain</th>
              <th style={{ border: '3px solid white', background: 'black', color: 'white' }}>IP</th>
              <th style={{ border: '3px solid white', background: 'black', color: 'white' }}>University</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid white', background: 'black', color: 'white' }}>{index + 1}</td>
                <td style={{ border: '1px solid white', background: 'black', color: 'white' }}>{user.profilePic}</td>
                <td style={{ border: '1px solid white', background: 'black', color: 'white' }}>{user.firstName}</td>
                <td style={{ border: '1px solid white', background: 'black', color: 'white' }}>{user.lastName}</td>
                <td style={{ border: '1px solid white', background: 'black', color: 'white' }}>{user.gender}</td>
                <td style={{ border: '1px solid white', background: 'black', color: 'white' }}>{user.email}</td>
                <td style={{ border: '1px solid white', background: 'black', color: 'white' }}>{user.username}</td>
                <td style={{ border: '1px solid white', background: 'black', color: 'white' }}>{user.domain}</td>
                <td style={{ border: '1px solid white', background: 'black', color: 'white' }}>{user.ip}</td>
                <td style={{ border: '1px solid white', background: 'black', color: 'white' }}>{user.university}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default UserTable;
