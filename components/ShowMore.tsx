"use clientSide";

import { ShowMoreProps } from "@/types";
import { updateSearchParams } from "@/utils";
import { useRouter } from "next/navigation";

const ShowMore = ({ pageNumber, isNext}: ShowMoreProps) => {
    const router = useRouter();

    const handleNavigation = () => {
      const newLimit = (pageNumber + 1) * 10;

      const newPathname = updateSearchParams("limit", `${newLimit}`);

      router.push(newPathname);
    };

  return (
    <div>ShowMore</div>
  )
}

export default ShowMore