function MetricsSection() {
  const metrics = [
    {
      sup: "+",
      value: "120",
      description: "Brand systems delivered across 14 industries",
    },
    {
      sup: "B",
      value: "$2.4",
      description: "Combined valuation of client portfolio",
    },
    {
      sup: "%",
      value: "98",
      description: "Client retention across all engagements",
    },
    {
      value: "8",
      sup: "yrs",
      description: "Average relationship length with enterprise clients",
    },
  ];

  return (
    <section className="px-4.5 sm:px-15 md:px-20 py-20 md:py-30 bg-(--ink) p-20">
      <div className="metrics-grid grid sm:grid-cols-2 md:grid-cols-4 reveal">
        {metrics.map((metric, ind) => (
          <div key={ind} className="metric-item">
            <div className="metric-val">
              {metric.value}
              <span className="metric-sup">{metric.sup}</span>
            </div>

            <div className="metric-label">{metric.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MetricsSection;
