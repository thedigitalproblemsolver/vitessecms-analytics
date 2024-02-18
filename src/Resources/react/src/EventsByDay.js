import React, {useEffect, useState} from "react";

export default function EventsByDay(props) {
    const [entries, setEntries] = useState([]);
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const response = await fetch('http://new.lekker-tuinieren.nl/admin/analytics/admindashboard/' + props.source);
        const data = await response.json();
        setEntries(data.data);
    };

    return <div>
        <p>{props.title}</p>
        <table className="table table-bordered">
            {entries.map((entry) => {
                return (
                    <tr>
                        <th className="post-title">{entry.date}</th>
                        <td className="post-body">{entry.amount}</td>
                    </tr>
                )
            })
            }
        </table>
        <button onClick={getData}>Reload</button>
    </div>;
}