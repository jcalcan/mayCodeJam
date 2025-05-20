import "./CaloriesGraph.css";

const graphData = [
  { label: "Mon", value: 1200 },
  { label: "Tue", value: 1000 },
  { label: "Wed", value: 850 },
  { label: "Thu", value: 1600 },
  { label: "Fri", value: 950 },
  { label: "Sat", value: 2000 },
  { label: "Sun", value: 1300 }
];

function CaloriesGraph() {
  const maxValue = Math.max(...graphData.map((day) => day.value));

  return (
    <section className="graph">
      <div className="graph__header">
        <h2 className="graph__title">Calories</h2>
        <div className="graph__filter">Week</div>
      </div>
      <div className="graph__container">
        <div className="graph__y-axis">
          <span>2000</span>
          <span>1500</span>
          <span>1000</span>
          <span>500</span>
          <span>0</span>
        </div>
        <div className="graph__bars">
          {graphData.map((day) => {
            const height = (day.value / maxValue) * 100;
            const isOverflow = day.value > maxValue;
            return (
              <div className="graph__bars">
                <div
                  key={day.label}
                  className={`graph__bar${
                    isOverflow ? " graph__bar--overflow" : ""
                  }`}
                  style={{ height: `${height}%` }}
                  title={`${day.label}: ${day.value}`}
                ></div>
                <div className="graph__label">{day.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CaloriesGraph;
