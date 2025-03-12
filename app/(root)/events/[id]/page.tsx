import { auth } from "@/auth";
import FeaturedEvent from "@/components/FeaturedEvent";
import { db } from "@/database/drizzle";
import { events } from "@/database/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const session = await auth();

  const [eventDetails] = await db
    .select()
    .from(events)
    .where(eq(events.id, id))
    .limit(1);

  if (!eventDetails) redirect("/404");

  return (
    <>
      <FeaturedEvent
        {...eventDetails}
        userId={session?.user?.id as string}
        homepage={false}
      />

      <div className="lg:mt-36 mt-16 mb-20 flex flex-col gap-16 lg:flex-row">
        <div className="flex-[1.5]">
          <section className="flex flex-col gap-7"></section>
        </div>
        {/*  SIMILAR*/}
      </div>
    </>
  );
};

export default Page;
