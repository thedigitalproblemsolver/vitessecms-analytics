function AnalyticsDashboard() {
    return <div className="row">
        <div className="col-12 col-lg-4"><EventsByDay source="getpageviewsbyday" title="PageViewsByDay"/></div>
        <div className="col-12 col-lg-4"><EventsByDay source="getclicksbyday" title="ClicksByDay"/></div>
        <div className="col-12 col-lg-4"><EventsByDay source="getwebcrawlervisitsbyday"
                                                      title="WebcrawlerVistsByDay"/></div>
    </div>;
}

function EventsByDay(props) {
    const [entries, setEntries] = React.useState([]);
    React.useEffect(() => {
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

//https://www.freecodecamp.org/news/how-to-consume-rest-apis-in-react/
//https://stackblitz.com/edit/react-tl46ms?file=src%2FApp.js
//https://www.turing.com/kb/use-webpack-with-react

const analyticsDashboardContainer = document.getElementById('react-analytics-dashboard');
if (null !== analyticsDashboardContainer) {
    const analyticsDashboardRoot = ReactDOM.createRoot(analyticsDashboardContainer);
    analyticsDashboardRoot.render(<AnalyticsDashboard/>);
}