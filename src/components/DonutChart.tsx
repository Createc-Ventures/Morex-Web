import { PieChart, Pie, Cell } from "recharts";

const COLORS = {
  darkBlue: "#0E2A47",
  beige: "#D9CBA3",
  lightBeige: "#EFE9D1",
  cream: "#F3ECD9",
};

const portfolioData = [
  { name: "Detached", value: 60, color: COLORS.darkBlue },
  { name: "Townhome", value: 15, color: COLORS.beige },
  { name: "Semi-Detached", value: 15, color: COLORS.cream },
  { name: "Condo", value: 10, color: COLORS.lightBeige },
];

const locationData = [
  { name: "Golden Horseshoe", value: 70, color: COLORS.darkBlue },
  { name: "GTA", value: 30, color: COLORS.beige },
];

const lendingData = [
  { name: "Second Position", value: 75, color: COLORS.darkBlue },
  { name: "First Position", value: 25, color: COLORS.beige },
];

// Wrapped in a div with Tailwind drop shadow for a soft glow
const renderPie = (data: any[]) => (
  <div className="shadow-xl rounded-full bg-white p-2">
    <PieChart width={220} height={220}>
      <Pie
        data={data}
        dataKey="value"
        innerRadius={50}
        outerRadius={90}
        paddingAngle={1}
        stroke="none"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
    </PieChart>
  </div>
);

const renderLegend = (data: any[], title: string) => (
  <div className="ml-4 text-sm font-semibold text-gray-800">
    <p className="mb-2">{title}</p>
    <div className="space-y-1">
      {data.map((entry) => (
        <div key={entry.name} className="flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-sm"
            style={{ backgroundColor: entry.color }}
          ></div>
          <span>{entry.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default function DonutChart() {
  return (
    <div className="flex flex-col items-center">
      {/* Top row: Portfolio and Location */}
      <div className="grid grid-cols-2 gap-12">
        <div className="flex items-center">
          {renderPie(portfolioData)}
          {renderLegend(portfolioData, "Diversified Portfolio")}
        </div>

        <div className="flex items-center">
          {renderPie(locationData)}
          {renderLegend(locationData, "Location")}
        </div>
      </div>

      {/* Bottom row: Secured Lending */}
      <div className="mt-12 flex items-center">
        {renderPie(lendingData)}
        {renderLegend(lendingData, "Secured Lending")}
      </div>
    </div>
  );
}
