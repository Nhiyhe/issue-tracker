import { Button } from "@radix-ui/themes";
import Link from "next/link";

const IssuesPage = () => {
  return (
    <h2>
      <Button>
        <Link href="/issues/new">Create Issue</Link>
      </Button>
    </h2>
  );
};

export default IssuesPage;
