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
import { deleteEvent } from "@/lib/admin/actions/event";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Span } from "next/dist/trace";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const columns: ColumnDef<Listing>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "venue",
    header: "Venue",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "startDateTime",
    header: "Start Date",
    cell: ({ row }) => {
      const date: string = row.getValue("startDateTime");
      return (
        <div>
          {" "}
          {date.slice(4, 15)} <span className="font-bold">{" | "}</span>{" "}
          {date.slice(16, 24)}
        </div>
      );
    },
  },
  {
    accessorKey: "endDateTime",
    header: "End Date",
    cell: ({ row }) => {
      const date: string = row.getValue("endDateTime");
      return (
        <div>
          {date.slice(4, 15)} <span className="font-bold">{" | "}</span>{" "}
          {date.slice(16, 24)}
        </div>
      );
    },
  },
  {
    accessorKey: "availableTickets",
    header: "Tickets",
  },
  {
    accessorKey: "createdAt",
    header: "Date Created",
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));
      const formatted = date.toLocaleDateString();
      return <div>{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const router = useRouter();

      const event = row.original;

      const handleDeleteClick = async () => {
        try {
          const result = await deleteEvent(event.id);

          if (result.success) {
            toast("event successfully deleted");
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

      const handleEditClick = () => {
        router.push(`/admin/events/${event.id}`);
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={handleEditClick}>
              Edit Event
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleDeleteClick}>
              Delete Event
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
