import React, {useEffect, useState} from 'react';

// component
import ItemDashboard from './ItemDashboard';

// services
import { getAllDashboards } from '../../Services/dashboard.service';

const Dashboard = () => {

    const [dashboards, setDashboards] = useState([]);

    useEffect(() => {
        getAllDashboards()
            .then(data => setDashboards(data.data.dashboards))
            .catch(error => console.log(error));
    },[]);

    return (
        <div className="container-fluid">

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">Dashboard/</li>
                </ol>
            </nav>
            
            <table className="table table-hover">
                <thead>
                    <tr className="table-danger">
                        <th scope="col">Player</th>
                        <th scope="col">Difficulty</th>
                        <th scope="col">Start time</th>
                        <th scope="col">End time</th>
                        <th scope="col">Total time spent</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {dashboards.map((dashboard) => {
                         return <ItemDashboard key={parseInt(dashboard.id)} item={dashboard} />
                    })}
                    
                </tbody>
            </table>
        </div>
    );

}

export default Dashboard;