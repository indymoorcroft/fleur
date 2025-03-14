import { auth } from "@/auth";
import FeaturedEvent from "@/components/FeaturedEvent";
import { getEventById } from "@/lib/actions/event";
import { redirect } from "next/navigation";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const session = await auth();

  const { data } = await getEventById(id);

  if (!data) redirect("/404");

  return (
    <>
      <FeaturedEvent
        {...data[0]}
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
