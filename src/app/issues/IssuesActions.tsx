import { Button } from "@radix-ui/themes";
import Link from "next/link";

const IssuesAction = () => {
  return (
    <div className="pb-5">
      <Button>
        <Link href="/issues/new">Create Issue</Link>
      </Button>
    </div>
  );
};

export default IssuesAction;
