import { useMemo, useState, useCallback } from "react";
import { Copy } from "lucide-react";
import { toast } from "sonner";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type passwordOptionsType = {
  passwordLength: number;
  upperCase: boolean;
  lowerCase: boolean;
  numbers: boolean;
  specials: boolean;
};

const App = () => {
  const [passwordOptions, setPasswordOptions] = useState<passwordOptionsType>({
    passwordLength: 1,
    upperCase: false,
    lowerCase: false,
    numbers: false,
    specials: true,
  });

  const generatePassword = useMemo(() => {
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specials = "!@#$%^&*()_+";

    let characters = specials;
    let password = "";

    if (passwordOptions.upperCase) {
      characters += upperCase;
    }
    if (passwordOptions.lowerCase) {
      characters += lowerCase;
    }
    if (passwordOptions.numbers) {
      characters += numbers;
    }

    for (let i = 0; i < passwordOptions.passwordLength; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    return password;
  }, [passwordOptions]);

  const password = generatePassword;

  const handleCopyButton = useCallback(() => {
    if (!password) {
      toast("Failed to copy password! Password is empty.", {
        closeButton: true,
        style: {
          backgroundColor: "#FFF",
          color: "black",
        },
        action: {
          label: "ERROR",
          onClick: () => console.log("Error: Password is empty"),
        },
      });
      return;
    }

    navigator.clipboard
      .writeText(password)
      .then(() => {
        toast("Password copied to clipboard!", {
          closeButton: true,
          style: {
            backgroundColor: "#FFF",
            color: "black",
          },
          action: {
            label: "SUCCESS",
            onClick: () => console.log("Success"),
          },
        });
      })
      .catch((error) => {
        toast(`Failed to copy password! ${error}`, {
          closeButton: true,
          style: {
            backgroundColor: "#FFF",
            color: "black",
          },
          action: {
            label: "ERROR",
            onClick: () => console.log("Error", error),
          },
        });
      });
  }, [password]);

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
                  value={[passwordOptions.passwordLength]}
                  onValueChange={(value) =>
                    setPasswordOptions((prevOptions) => ({
                      ...prevOptions,
                      passwordLength: value[0],
                    }))
                  }
                />
                <Button disabled>{passwordOptions.passwordLength}</Button>
              </div>
              <div className="grid grid-cols-2 gap-4 space-y-1.5">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="upper-case"
                    onCheckedChange={() =>
                      setPasswordOptions((prevOptions) => ({
                        ...prevOptions,
                        upperCase: !prevOptions.upperCase,
                      }))
                    }
                  />
                  <label
                    htmlFor="upper-case"
                    className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Upper-case
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="lower-case"
                    onCheckedChange={() =>
                      setPasswordOptions((prevOptions) => ({
                        ...prevOptions,
                        lowerCase: !prevOptions.lowerCase,
                      }))
                    }
                  />
                  <label
                    htmlFor="lower-case"
                    className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Lower-case
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="numbers"
                    onCheckedChange={() =>
                      setPasswordOptions((prevOptions) => ({
                        ...prevOptions,
                        numbers: !prevOptions.numbers,
                      }))
                    }
                  />
                  <label
                    htmlFor="numbers"
                    className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Numbers
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="specials"
                    disabled
                    defaultChecked
                    onCheckedChange={() =>
                      setPasswordOptions((prevOptions) => ({
                        ...prevOptions,
                        specials: !prevOptions.specials,
                      }))
                    }
                  />
                  <label
                    htmlFor="specials"
                    className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Specials
                  </label>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <Card className="flex w-[500px] flex-row gap-4 p-8">
        <Input
          value={password}
          onChange={(e) =>
            setPasswordOptions((prevOptions) => ({
              ...prevOptions,
              password: e.target.value,
            }))
          }
          disabled
        />
        <Button variant="secondary" onClick={handleCopyButton}>
          <Copy />
        </Button>
      </Card>
    </section>
  );
};

export default App;
