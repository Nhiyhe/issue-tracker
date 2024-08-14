import prisma from "@/app/db";
import { Box, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import IssueEditButton from "./IssueEditButton";
import IssueEditDetails from "./IssueEditDetails";
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
    <Grid columns={{ initial: "1", md: "2" }}>
      <Box>
        <IssueEditDetails issue={issue} />
      </Box>
      <Box className="mt-5">
        <IssueEditButton issueId={issue.id} />
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
