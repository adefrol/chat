"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IUserSignIn } from "@/interfaces/user.interface";
import { AuthService } from "@/serivces/auth.service";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SignInForm() {
    const router = useRouter();

    const [signData, setSignData] = useState<IUserSignIn>({
        username: "",
        password: "",
    });

    const { mutateAsync: signIn } = useMutation({
        mutationFn: async (signData: IUserSignIn) =>
            await AuthService.signIn(signData),
    });

    async function handleSignIn() {
        await signIn(signData, { onSuccess: async (data) => {
            
        } });
    }

    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl">Войти</CardTitle>
                <CardDescription>
                    Введите ваш логин и пароль для входа.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="email">Логин</Label>
                    <Input
                        onChange={(e) => {
                            setSignData({
                                ...signData,
                                username: e.target.value,
                            });
                        }}
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Пароль</Label>
                    <Input
                        id="password"
                        type="password"
                        required
                        onChange={(e) => {
                            setSignData({
                                ...signData,
                                password: e.target.value,
                            });
                        }}
                    />
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Войти</Button>
            </CardFooter>
        </Card>
    );
}
