import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/shared/components/ui/avatar";
import { Button } from "@/shared/components/ui/button";
import { Badge } from "@/shared/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";

type RecipeType = {
  id: string;
  title: string;
  image: string;
  time: number;
  description: string;
  vegan: boolean;
};

const fetchRecipes = async (): Promise<RecipeType[]> => {
  const recipes = await fetch("http://localhost:4000/recipes");

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return recipes.json();
};

const HomePage = async () => {
  const recipes = await fetchRecipes();

  return (
    <main>
      <div className="grid grid-cols-3 gap-8 m-8">
        {recipes.map(({ id, image, title, time, description, vegan }) => (
          <Card key={id} className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 items-center">
              <Avatar>
                <AvatarImage src={`/images/${image}`} alt="@shadcn" />
                <AvatarFallback>{title.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{time} mins to cook.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button>View Recipe</Button>
              {vegan && <Badge variant="secondary">Vegan!</Badge>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
