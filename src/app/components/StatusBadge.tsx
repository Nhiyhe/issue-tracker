import { Badge, Flex } from "@radix-ui/themes";

const StatusBadge = ({ status }: { status: string }) => {
  const statusMap: Record<
    string,
    { label: string; color: "red" | "violet" | "green" }
  > = {
    OPEN: { label: "Open", color: "red" },
    IN_PROGRESS: { label: "In progress", color: "violet" },
    CLOSED: { label: "Closed", color: "green" },
  };

  return (
    <Flex gap="2">
      <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
    </Flex>
  );
};

export default StatusBadge;
