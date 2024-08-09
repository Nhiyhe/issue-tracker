import { notFound } from "next/navigation";
import prisma from "../../../../prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import StatusBadge from "@/app/components/StatusBadge";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) {
    notFound();
  }

  return (
    <div>
      <Heading>Issue Details {issue.title}</Heading>
      <Flex gap="5" my="5">
        <StatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card>
        <p>{issue.description}</p>
      </Card>
    </div>
  );
};

export default IssueDetailPage;
