import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import type { CostBreakdown } from "@/../mock/core/administration/billingData";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface CostBreakdownTableProps {
  data: CostBreakdown[];
}

export function CostBreakdownTable({ data }: CostBreakdownTableProps) {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'UP': return <TrendingUp className="h-3 w-3 text-red-500" />;
      case 'DOWN': return <TrendingDown className="h-3 w-3 text-green-500" />;
      default: return <Minus className="h-3 w-3 text-muted-foreground" />;
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-[10px] font-bold uppercase">Category</TableHead>
            <TableHead className="text-[10px] font-bold uppercase">Resource Name</TableHead>
            <TableHead className="text-[10px] font-bold uppercase text-right">Tokens</TableHead>
            <TableHead className="text-[10px] font-bold uppercase text-right">Cost</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <Badge variant="outline" className="text-[9px] h-4">
                  {item.category}
                </Badge>
              </TableCell>
              <TableCell className="text-xs font-medium">{item.name}</TableCell>
              <TableCell className="text-right text-xs font-mono">
                {item.tokens.toLocaleString()}
              </TableCell>
              <TableCell className="text-right text-xs font-bold">
                ${item.cost.toFixed(2)}
              </TableCell>
              <TableCell>
                {getTrendIcon(item.trend)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
