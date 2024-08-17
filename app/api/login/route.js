import { cookies } from "next/headers";
import { createAdminClient } from "@/backend/appwrite";
export async function POST(request) {
    const {account} = await createAdminClient();
try {
  const {email,password} = await request.json();
  const user  = await account.createEmailPasswordSession(email,password);
  cookies().set("session", user.secret, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    expires: new Date(user.expire),
    path: "/",
  });
  return Response.json(user);
} catch (error) {
    console.log(error);
  return Response.json(error);
}
}
