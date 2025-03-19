import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

export default function App() {
  const [totalSpent, setTotalSpent] = useState(0);
  return (
    <div className="flex flex-col items-center m-10">
      <Card className="w-lg text-center">
        <CardHeader>
          <CardTitle className="text-2xl">Total Spent</CardTitle>
          <CardDescription>Your total amount of spent</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-4xl">{totalSpent}৳</p>
        </CardContent>
      </Card>
    </div>
  );
}
