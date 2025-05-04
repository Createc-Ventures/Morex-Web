import { PieChart, Pie, Cell } from "recharts";
import { Card, CardContent } from "@/components/ui/card";

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

const renderPie = (data: any[]) => (
  <div className="flex justify-center">
    <PieChart width={220} height={220}>
      <Pie
        data={data}
        dataKey="value"
        innerRadius={60}
        outerRadius={90}
        paddingAngle={2}
        stroke="#fff"
        strokeWidth={2}
        startAngle={180}
        endAngle={-180}
        isAnimationActive={true}
        animationDuration={1500}
        animationEasing="ease-out"
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={entry.color}
            style={{ filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.25))" }}
          />
        ))}
      </Pie>
    </PieChart>
  </div>
);


const renderLegend = (data: any[], title: string) => (
  <div className="ml-6 text-sm font-semibold text-gray-800">
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
    <div className="flex flex-col items-center gap-10 mt-20">
      {/* Top Row */}
      <div className="grid grid-cols-2 gap-8">
        <Card className="shadow-xl p-6 flex items-center">
          <CardContent className="flex items-center">
            {renderPie(portfolioData)}
            {renderLegend(portfolioData, "Diversified Portfolio")}
          </CardContent>
        </Card>

        <Card className="shadow-xl p-6 flex items-center">
          <CardContent className="flex items-center">
            {renderPie(locationData)}
            {renderLegend(locationData, "Location")}
          </CardContent>
        </Card>
      </div>

      {/* Bottom Chart */}
      <Card className="shadow-xl p-6 flex items-center">
        <CardContent className="flex items-center">
          {renderPie(lendingData)}
          {renderLegend(lendingData, "Secured Lending")}
        </CardContent>
      </Card>
    </div>
  );
}
