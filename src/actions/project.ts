"use server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { onAuthenticteUser } from "./user";
export const getAllProjects = async () => {
  try {
    const checkUser = await onAuthenticateUser();
    if (checkUser.status !== 200 || !checkUser.user) {
      return { status: 403, error: "User not Authenticated" };
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const projects = await client.project.findMany({
      where: {
        userId: checkUser.user.id,
        isDeleted: false,
      },
      orderBy: {
        updateAt: "desc",
      },
    });

    if (projects.length === 0) {
      return { status: 404, error: "No Projects Found" };
    }

    return { status: 200, data: projects };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    console.log("🔴 Error", error);
    return { status: 500, error: 'Internal Server Error' };
  }
};
