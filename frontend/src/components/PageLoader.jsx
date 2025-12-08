import { LoaderIcon } from "lucide-react";

const PageLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <LoaderIcon className="w-10 h-10 animate-spin text-white" />
    </div>
  );
};

export default PageLoader;
