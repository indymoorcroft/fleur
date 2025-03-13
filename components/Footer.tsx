import Link from "next/link";
import Image from "next/image";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";

const Footer = async ({ userId }: any) => {
  const isAdmin = await db
    .select({ isAdmin: users.role })
    .from(users)
    .where(eq(users.id, userId))
    .limit(1)
    .then((res) => res[0]?.isAdmin === "ADMIN");

  return (
    <footer className="border-t">
      <div className="flex justify-between py-2">
        <Link href="/">
          <div className="flex flex-row items-center gap-2 max-md:justify-center">
            <Image
              src="/icons/admin/logo.svg"
              alt="logo"
              width={25}
              height={25}
            />
            <p className="font-rundeck-smooth text-2xl font-semibold tracking-tighter text-blue-950">
              fleur
            </p>
          </div>
        </Link>

        <div className="flex flex-col">
          <p className="text-sm py-1">
            <Link href="/">home</Link>
          </p>
          <p className="text-sm py-1">
            <Link href="/events">events</Link>
          </p>
          <p className="text-sm py-1">
            {isAdmin ? <Link href="/admin">admin</Link> : null}
          </p>
        </div>
      </div>
      <div>
        <p className="text-center mb-2">2025 fleur | all rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
