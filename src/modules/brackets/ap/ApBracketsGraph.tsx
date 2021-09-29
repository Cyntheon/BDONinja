import ArticlePaper from "components/ArticlePaper";
import apBrackets from "modules/brackets/ap/apBrackets";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import theme from "app/theme";

const ApBracketsGraph = () => {
  return (
    <ArticlePaper>
      <ResponsiveContainer width={600} height={600}>
        <LineChart data={apBrackets}>
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="bonusAp"
            name="Bonus AP"
            yAxisId="left"
            stroke={theme.palette.primary.main}
          />
          <Line
            type="monotone"
            dataKey="bonusPerSheetIncrease"
            name="ΔBonus / ΔSheet"
            yAxisId="right"
            stroke={theme.palette.success.light}
          />
          <CartesianGrid
            stroke="rgba(255, 255, 255, 0.1)"
            strokeDasharray="5 5"
          />
          <XAxis
            dataKey="min"
            tickCount={apBrackets.length}
            domain={[0, apBrackets[apBrackets.length - 1].min]}
          />
          <YAxis
            yAxisId="left"
            tickCount={apBrackets.length}
            domain={[0, apBrackets[apBrackets.length - 1].bonusAp + 10]}
            scale="linear"
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tickCount={apBrackets.length}
            domain={[0, 5.4]}
            scale="linear"
          />
        </LineChart>
      </ResponsiveContainer>
    </ArticlePaper>
  );
};

export default ApBracketsGraph;
