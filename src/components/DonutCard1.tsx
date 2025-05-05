"use client";
import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const data = [
  { name: "Detached", value: 60 },
  { name: "Townhome", value: 15 },
  { name: "Semi-Detached", value: 15 },
  { name: "Condo", value: 10 },
];

const COLORS = ["#012c51", "#cdb989", "#e6ddc9", "#f7f4ed"];

export default function DonutCard1() {
  return (
    <Card className="w-full max-w-[350px] shadow-lg p-4">
      <CardContent className="flex flex-col items-center">
        <div className="transform -scale-x-100">
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              startAngle={90}
              endAngle={-270}
              innerRadius={60}
              outerRadius={85}
              paddingAngle={2}
              dataKey="value"
              isAnimationActive
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="mt-4 text-left text-sm text-[#012c51]">
          <p><strong>Diversified Portfolio</strong></p>
          {data.map((entry, idx) => (
            <p key={idx}>
              <span
                className="inline-block w-3 h-3 rounded-sm mr-2"
                style={{ backgroundColor: COLORS[idx] }}
              />
              {entry.name}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
