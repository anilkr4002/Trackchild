import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getChildLocations } from '../services/api';
import Map from '../components/Map';
import AlertList from '../components/AlertList';


const ParentDashboard = () => {
  const { user } = useAuth();
  const [locations, setLocations] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await getChildLocations(user?.childId);
        setLocations(response.data.locations);
        setAlerts(response.data.alerts);
      } catch (error) {
        console.error('Failed to fetch locations:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user) fetchLocations();
  }, [user]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
      {/* Map Section */}
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-2">Child Location</h2>
        <Map locations={locations} center={locations[0]} zoom={13} />
      </div>

      {/* Alerts Section */}
      <div className="w-full lg:w-1/3">
        <h2 className="text-xl font-bold mb-2">Alerts</h2>
        <AlertList alerts={alerts} />
      </div>
    </div>
  );
};

export default ParentDashboard;
