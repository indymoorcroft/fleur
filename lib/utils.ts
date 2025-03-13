import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("en-GB", { month: "long" });
  const year = date.getFullYear();

  function getOrdinal(n: number) {
    if (n > 10 && n < 20) return "th";
    const lastDigit = n % 10;
    if (lastDigit === 1) return "st";
    if (lastDigit === 2) return "nd";
    if (lastDigit === 3) return "rd";
    return "th";
  }

  return `${day}${getOrdinal(day)} ${month} ${year}`;
};

export const getInitial = (firstName: string): string => {
  return firstName[0].toUpperCase();
};

export const calendarDate = (dateString: string, offsetHours = 0) => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  const offset =
    (offsetHours >= 0 ? "+" : "-") +
    String(offsetHours).padStart(2, "0") +
    "00";

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds} ${offset}`;
};
