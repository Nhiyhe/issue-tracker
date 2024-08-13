import { Flex, Card, Box } from "@radix-ui/themes";
import { Skeleton } from "@/app/components";

const IssueDetailLoadingPage = () => {
  return (
    <Box className="max-w-lg">
      <Skeleton />
      <Flex gap="5" my="5">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="prose">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};

export default IssueDetailLoadingPage;
