import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";

export default function App() {
  const [totalSpent, setTotalSpent] = useState(0);

  useEffect(() => {
    const fetchTotalSpent = async () => {
      const response = await api.expenses["total-spent"].$get();
      const data = await response.json();
      console.log(data);

      setTotalSpent(data.total);
    };

    fetchTotalSpent();
  }, []);

  return (
    <div className="flex flex-col items-center m-10">
      <Card className="w-lg text-center">
        <CardHeader>
          <CardTitle className="text-2xl">Total Spent</CardTitle>
          <CardDescription>Your total amount of spent</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-4xl">{totalSpent}</p>
        </CardContent>
      </Card>
    </div>
  );
}
