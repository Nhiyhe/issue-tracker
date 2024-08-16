import { Skeleton } from "@/app/components";
import { Box } from "@radix-ui/themes";
const NewIssueLoadingPage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton width="10rem" />
      <Skeleton height="20rem" />
    </Box>
  );
};

export default NewIssueLoadingPage;
