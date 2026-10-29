"use client";

import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "./ui/toast";

type UserNavProps = {
  user: {
    name: string;
    email: string;
    image?: string | null;
  };
};

export function UserNav({ user }: UserNavProps) {
  const router = useRouter();
  const firstName = user.name.trim().split(/\s+/)[0] || "User";

  async function handleLogout() {
    const result = await signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.add({
            title: "Logged out",
            description: "You have been successfully logged out.",
            type: "success",
            timeout: 3000,
          });
          router.push("/sign-in");
          router.refresh(); // Refreshes Server Components (like NavBar)
        },
      },
    });
    if (result.error) {
      toast.add({
        title: "Logout failed",
        description: result.error.message || "An error occurred during logout.",
        type: "error",
        timeout: 5000,
      });
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="relative h-9 w-9 rounded-full"
            aria-label="Open user menu"
          />
        }
      >
        <Avatar className="h-9 w-9 cursor-pointer">
          <AvatarImage src={user.image || undefined} alt={user.name} />
          <AvatarFallback className="text-xs font-medium">
            {firstName}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-64">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{user.name}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            </div>
          </DropdownMenuLabel>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={handleLogout}
            className="cursor-pointer text-destructive focus:text-destructive"
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
