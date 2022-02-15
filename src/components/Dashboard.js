import { useState, useEffect } from "react";
import './Dashboard.css';

const Dashboard = () => {

    const [value, setValue] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/details')
            .then((res) => {
                return (res.json())
            })
            .then(data => {
                setValue(data)
            })
            .catch(err => {
                console.log(err.message);
            })
    }, []);

    return (
        <div className="dashboard">
            {value.map((item) => {
                return (
                    <div key={item.id}>
                        <h1>Welcome {item.userName}</h1>
                        <h4>This is your dashboard</h4>
                    </div>
                )
            })}
        </div>
    );
}


export default Dashboard;