import { IUserSignIn } from "@/interfaces/user.interface";
import { axiosInstance } from '@/lib/axios'

export const AuthService = {
    async signIn(signData: IUserSignIn) {
        const { data } = await axiosInstance.post(
            `/auth/login`,
            signData,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        return data;
    },
};
