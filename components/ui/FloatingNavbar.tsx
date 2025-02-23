// Add this icon import at the top
import { FaBookOpen } from "react-icons/fa";

// Update the navItems map to include icons
{
  navItems.map((navItem: any, idx: number) => (
    <Link
      key={`link=${idx}`}
      href={navItem.link}
      className={cn("relative flex items-center space-x-1")}
    >
      {navItem.name === "Logs" && (
        <FaBookOpen className="hidden sm:block mr-1" />
      )}
      <span className="text-sm !cursor-pointer">{navItem.name}</span>
    </Link>
  ));
}
