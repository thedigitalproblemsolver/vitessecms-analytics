import React, {useEffect, useState} from "react";
import FetchApi from "../utils/FetchApi";

export default function EventsByDay({source, title}: { source: string, title: string }) {
    const [entries, setEntries] = useState<Entry[]>([]);
    useEffect((): void => {
        getData();
    }, []);

    const getData = async (): Promise<void> => {
        const items = await FetchApi('/admin/analytics/admindashboard/' + source);
        setEntries(items.data);
    };

    return <div>
        <p>{title}</p>
        <table className="table table-bordered">
            {entries.map((entry: Entry) => {
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