import { notFound } from "next/navigation";
import prisma from "../../../../prisma/client";

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
      <p>Issue Details {issue.title}</p>
      <p>{issue.description}</p>
      <p>{issue.status}</p>
    </div>
  );
};

export default IssueDetailPage;
