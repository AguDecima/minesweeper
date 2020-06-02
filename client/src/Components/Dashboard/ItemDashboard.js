import React from 'react';

const ItemDashboard = ({item}) => {

    const statusColor = (status) =>{
        if(status === 'WON') return <p className="text-success"><b>WON!</b></p>
        if(status === 'LOST') return <p className="text-danger"><b>LOST!</b></p>
    }

    const difficultyShow = (difficulty) =>{
        if(parseInt(difficulty) === 1) return <p className="text-success"><b>EASY</b></p>
        if(parseInt(difficulty) === 2) return <p className="text-info"><b>MEDIUM</b></p>
        if(parseInt(difficulty) === 3) return <p className="text-danger"><b>HARD</b></p>
    }

    return (
        <tr>
            <th scope="row">{item.player}</th>
            <td>{difficultyShow(item.difficulty)}</td>
            <td>{item.start_time}</td>
            <td>{item.end_time}</td>
            <td>{item.time_spent}</td>
            <td>{statusColor(item.status)}</td>
        </tr>
    );
}

export default ItemDashboard;