import prisma from "@/app/db";
import NewIssueForm from "../../_components/IssueForm";
import { notFound } from "next/navigation";

const IssueEditPage = async ({ params }: { params: { id: string } }) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return <NewIssueForm issue={issue} />;
};

export default IssueEditPage;
