"use client";
import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const data = [
  { name: "Golden Horseshoe", value: 70 },
  { name: "GTA", value: 30 },
];

const COLORS = ["#012c51", "#cdb989"];

export default function DonutCard2() {
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
          <p><strong>Location</strong></p>
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
