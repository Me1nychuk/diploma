import React, { Suspense } from "react";
import { Loader2 } from "lucide-react";
import { AdminContent } from "@/shared/components/shared";

const AdminPage: React.FC = () => {
  return (
    <>
      <Suspense fallback={<Loader2 className=" animate-spin mx-auto mt-2" />}>
        <AdminContent />
      </Suspense>
    </>
  );
};

export default AdminPage;
