import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

async function fetchTotalSpent() {
  const response = await api.expenses["total-spent"].$get();
  const data = await response.json();
  return data.total;
}

export default function App() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["total-spent"],
    queryFn: fetchTotalSpent,
  });
  return (
    <div className="flex flex-col items-center m-10">
      <Card className="w-lg text-center">
        <CardHeader>
          <CardTitle className="text-2xl">Total Spent</CardTitle>
          <CardDescription>Your total amount of spent</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? "Loading..." : <p className="text-4xl">{data}৳</p>}
          {isError && <p>An error occurred!</p>}
        </CardContent>
      </Card>
    </div>
  );
}
