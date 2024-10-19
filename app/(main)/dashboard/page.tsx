"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/nextjs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNameSchema } from "@/app/lib/validators";
import { useEffect } from "react";

const Page = () => {
  const { isLoaded, user } = useUser();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(useNameSchema),
  });
  const onSubmit = async (data) => {};

  useEffect(() => {
    setValue("username", user?.username);
  }, [isLoaded, setValue, user?.username]);
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Welcome {user?.firstName}</CardTitle>
        </CardHeader>
        {/* Latest update */}
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Unique Link</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            action=""
            className="space-y-4"
          >
            <div>
              <div className="flex items-center gap-2 w.">
                <span>
                  {typeof window !== "undefined" ? window.location.origin : ""}
                </span>
                <Input {...register("username")} placeholder="username" />
              </div>
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>
            <Button type="submit" className="bg-purple-500 hover:bg-purple-400">
              Update Username
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
