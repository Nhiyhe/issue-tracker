import { Flex, Card, Box } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import delay from "delay";

const IssueDetailLoadingPage = () => {
  delay(5000);
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
    // <div>Loading...</div>
  );
};

export default IssueDetailLoadingPage;
