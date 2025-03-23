"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { checkIsAdmin } from "@/lib/actions/auth";
import { updateAdminStatus } from "@/lib/admin/actions/user";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { ArrowUpDown } from "lucide-react";
import { toast } from "sonner";

export const userColumns: ColumnDef<UserParams>[] = [
  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "lastActivityDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Last Active
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("lastActivityDate"));
      const formatted = date.toLocaleDateString();
      return <div className="ml-8">{formatted}</div>;
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date Created
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));
      const formatted = date.toLocaleDateString();
      return <div className="ml-8">{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const event = row.original;

      const isSuperAdmin = event.role === "SUPER ADMIN";
      const isAdmin = event.role === "ADMIN";

      const handleAdminClick = async () => {
        try {
          const checkRole = await checkIsAdmin(event.id);

          const result = await updateAdminStatus(checkRole, event.id);

          if (result.success) {
            toast("user role updated");
          } else {
            throw new Error();
          }
        } catch (error: any) {
          console.log(error);
          toast(error.message);
        } finally {
          setInterval(() => {
            window.location.reload();
          }, 1000);
        }
      };

      return (
        <div>
          {!isSuperAdmin ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem onClick={handleAdminClick}>
                  {isAdmin ? "Remove Admin" : "Make Admin"}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : null}
        </div>
      );
    },
  },
];
