import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions)
  return (
    <div className="text-center">
      {session?.user && (
        <>
          <h1 className="text-4xl  mt-10">Welcome: {session?.user?.name}</h1>

          <h1 className="text-3xl mt-10">Your Email: {session?.user?.email}</h1>

          <Image
            src={session?.user?.image as string}
            alt="next image"
            width={200}
            height={200}
            className="mx-auto rounded-full"
          />
        </>
      )}
    </div>
  );
};

export default DashboardPage;
