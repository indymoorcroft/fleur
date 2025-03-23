import Link from "next/link";
import Image from "next/image";

const Dashboard = () => {
  return (
    <section className="w-full rounded-2xl bg-white p-7">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Dashboard</h2>
      </div>
      <div className="mt-7 w-full">
        <div className="flex flex-row gap-8">
          <Link href="/admin/users">
            <div className="flex flex-col items-center border border-gray-400 rounded-lg p-4">
              <Image
                src="/icons/admin/users.svg"
                alt="users icon"
                width={75}
                height={75}
              />
              <p className="mt-1">Users</p>
            </div>
          </Link>
          <Link href="/admin/events">
            <div className="flex flex-col items-center border border-gray-400 rounded-lg p-4">
              <Image
                src="/icons/admin/calendar.svg"
                alt="users icon"
                width={75}
                height={75}
              />
              <p className="mt-1">Events</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
