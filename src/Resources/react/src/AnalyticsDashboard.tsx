import EventsByDay from "./EventsByDay";

export default function AnalyticsDashboard() {
    return (
        <div className="row">
            <div className="col-12 col-lg-4"><EventsByDay source="getpageviewsbyday" title="PageViewsByDay"/></div>
            <div className="col-12 col-lg-4"><EventsByDay source="getclicksbyday" title="ClicksByDay"/></div>
            <div className="col-12 col-lg-4"><EventsByDay source="getwebcrawlervisitsbyday"
                                                          title="WebcrawlerVistsByDay"/></div>
        </div>
    );
}
