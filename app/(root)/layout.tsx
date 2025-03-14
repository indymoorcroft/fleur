import { auth } from "@/auth";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  if (!session) redirect("/sign-in");

  return (
    <main className="flex min-h-screen flex-1 flex-col bg-pattern bg-cover bg-top bg-light-100 px-5 xs:px-10 md:px-16">
      <div className="mx-auto max-w-7xl">
        <Header session={session} />
        <div className="mt-20 pb-20">{children}</div>
        <Footer userId={session.user?.id} />
      </div>
    </main>
  );
};

export default Layout;
