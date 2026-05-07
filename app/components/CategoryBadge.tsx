import Link from "next/link";

interface CategoryBadgeProps {
  category: any;
  variant?: "default" | "large";
}

export function CategoryBadge({ category, variant = "default" }: CategoryBadgeProps) {
  const baseStyle =
    "rounded-full hover:opacity-80 transition-opacity font-semibold text-center";
  const sizeStyle =
    variant === "large"
      ? "px-6 py-3 text-base"
      : "px-3 py-1 text-sm";

  return (
    <Link href={`/categories/${category.slug?.current || category._id}`}>
      <div className={`${baseStyle} ${sizeStyle} bg-gradient-to-r from-blue-500 to-blue-600 text-white block`}>
        {category.title}
      </div>
    </Link>
  );
}
