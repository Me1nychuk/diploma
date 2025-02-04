import { EditPageContent } from "@/shared/components/shared/edit";

import React from "react";

interface PageProps {
  params: { id: string };
}

const DiscussionEditPage: React.FC<PageProps> = ({ params }) => {
  const { id } = params;
  return <EditPageContent id={id} />;
};

export default DiscussionEditPage;
