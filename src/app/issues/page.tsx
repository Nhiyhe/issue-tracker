import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import prisma from "../../../prisma/client";
import StatusBadge from "../components/StatusBadge";
import delay from "delay";
import IssuesAction from "./IssuesActions";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();

  await delay(2000);
  return (
    <>
      <IssuesAction />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Date</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>{issue.title}</Table.Cell>
              <Table.Cell>
                <StatusBadge status={issue.status} />
              </Table.Cell>
              <Table.Cell>{issue.createdAt.toDateString()}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
};

export default IssuesPage;
