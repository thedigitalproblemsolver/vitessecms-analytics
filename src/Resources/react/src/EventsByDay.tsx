import React, {useEffect, useState} from "react";

export default function EventsByDay({source, title}: { source: string, title: string }) {
    const [entries, setEntries] = useState([]);
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const response = await fetch('http://new.lekker-tuinieren.nl/admin/analytics/admindashboard/' + source);
        const data = await response.json();
        setEntries(data.data);
    };

    return <div>
        <p>{title}</p>
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