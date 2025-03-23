import { getAllUsers } from "@/lib/admin/actions/user";
import { DataTable } from "@/components/admin/DataTable";
import { userColumns } from "@/app/admin/users/userColumns";

const AllUsers = async () => {
  const { data } = await getAllUsers();

  return (
    <section className="w-full rounded-2xl bg-white p-7">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">All Users</h2>
      </div>
      <div className="mt-7 w-full overflow-hidden">
        <DataTable columns={userColumns} data={data} type="users" />
      </div>
    </section>
  );
};

export default AllUsers;
