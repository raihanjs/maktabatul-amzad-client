export default function PickYear({ selectedYear, setSelectedYear }) {
  const years = [""];
  for (let i = 1949; i < 2030; i++) {
    years.push(i);
  }
  return (
    <select
      defaultValue={selectedYear}
      onChange={(e) => setSelectedYear(e.target.value)}
      className="border border-black py-1 px-5"
    >
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
}
