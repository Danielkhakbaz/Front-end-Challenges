import { useState } from "react";
import { Copy } from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { CheckboxWithText } from "@/components/ui/checkbox-text";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const App = () => {
  const [sliderValue, setSliderValue] = useState<number[]>([1]);

  return (
    <section className="flex h-screen flex-col items-center justify-center gap-4 text-center">
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle>PASSWORD GENERATOR</CardTitle>
          <CardDescription className="text-xs">
            Create your own password with the desired length.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-8">
              <div className="flex flex-row gap-4 space-y-1.5">
                <Slider
                  min={1}
                  max={32}
                  value={sliderValue}
                  onValueChange={(value) => setSliderValue(value)}
                />
                <Button disabled>{sliderValue[0]}</Button>
              </div>
              <div className="grid grid-cols-2 gap-4 space-y-1.5">
                <CheckboxWithText id="upper-case" title="Upper-case" />
                <CheckboxWithText id="lower-case" title="Lower-case" />
                <CheckboxWithText id="numbers" title="Numbers" />
                <CheckboxWithText id="specials" title="Specials" />
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <Card className="flex w-[500px] flex-row gap-4 p-8">
        <Input defaultValue="Guess the Password!" disabled />
        <Button>
          <Copy />
        </Button>
      </Card>
    </section>
  );
};

export default App;
