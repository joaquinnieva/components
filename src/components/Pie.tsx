function Pie() {
  return (
    <div>
      <div className="Content">
        <div className="QuestionsBlock">
          <ul aria-label="test">asd</ul>
        </div>
        <div className="ChartBlock">
          <div className="ChartPie" style={{ width: '450px' }}>
            <svg viewBox="0 0 64 64" className="pie">
              <circle aria-label="test" r="25%" cx="50%" cy="50%" style={{ strokeDasharray: '10 100' }}></circle>
              <circle r="25%" cx="50%" cy="50%" style={{ strokeDasharray: '10 100', stroke: 'green', strokeDashoffset: -10 }}></circle>
              <circle r="25%" cx="50%" cy="50%" style={{ strokeDasharray: '10 100', stroke: 'blue', strokeDashoffset: -30 }}></circle>
              {/* <circle r="25%" cx="50%" cy="50%" style={{ strokeDasharray: '19.9 100', stroke: 'green', strokeDashoffset: -75.3 }}></circle>
              <circle r="25%" cx="50%" cy="50%" style={{ strokeDasharray: '2.3 100', stroke: 'blue', strokeDashoffset: -95.2 }}></circle>
              <circle r="25%" cx="50%" cy="50%" style={{ strokeDasharray: '1.4 100', stroke: 'orange', strokeDashoffset: -97.5 }}></circle>
              <circle r="25%" cx="50%" cy="50%" style={{ strokeDasharray: '1.1 100', stroke: 'red', strokeDashoffset: -98 }}></circle> */}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pie;
