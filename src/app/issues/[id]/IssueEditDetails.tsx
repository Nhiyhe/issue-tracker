import { StatusBadge } from "@/app/components";
import { Issue } from "@prisma/client";
import { Heading, Flex, Card, Text } from "@radix-ui/themes";
import Markdown from "react-markdown";

const IssueEditDetails = ({ issue }: { issue: Issue }) => {
  return (
    <>
      <Heading>Issue Details {issue.title}</Heading>
      <Flex gap="5" my="5">
        <StatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose">
        <Markdown>{issue.description}</Markdown>
      </Card>
    </>
  );
};

export default IssueEditDetails;
