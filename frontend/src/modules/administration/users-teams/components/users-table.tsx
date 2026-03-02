import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { User } from "@/../mock/core/administration/usersData";

interface UsersTableProps {
  users: User[];
  onSelectUser: (user: User) => void;
}

export function UsersTable({ users, onSelectUser }: UsersTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Team</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Joined</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow 
              key={user.id} 
              className="cursor-pointer hover:bg-muted/50"
              onClick={() => onSelectUser(user)}
            >
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">{user.name}</span>
                    <span className="text-xs text-muted-foreground">{user.email}</span>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <span className="text-xs font-medium">{user.roleName}</span>
              </TableCell>
              <TableCell>
                <Badge variant="outline" className="text-[10px]">
                  {user.teamName}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge 
                  variant={user.status === "ACTIVE" ? "default" : "secondary"}
                  className="text-[10px]"
                >
                  {user.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right text-xs text-muted-foreground">
                {user.joinedAt}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
