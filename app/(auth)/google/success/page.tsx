import { GoogleContent } from "@/shared/components/shared/auth";
import { Loader2 } from "lucide-react";
import { cookies } from "next/headers";
import React, { Suspense } from "react";

const Page: React.FC = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("googleToken")?.value;
  return (
    <div className="w-full max-w-[700px] p-5 rounded-xl glass h-full mx-auto">
      <Suspense fallback={<Loader2 className="animate-spin mx-auto mt-2" />}>
        {token && <GoogleContent token={token} />}
      </Suspense>
    </div>
  );
};

export default Page;