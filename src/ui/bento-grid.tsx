import { cn } from "@/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: string;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        " row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 shadow-lg h-full",
        className
      )}
    >
      <img className="rounded-t-lg max-h-44" src={header} alt="" />
      <div className="h-full group-hover/bento:translate-x-2 transition duration-200">
        <h1 className="font-sans font-extrabold text-lg mb-2 mt-2 text-green-600">
          {title}
        </h1>
        <p className="font-roboto font-normal text-md text-darkGrey">
          {description}
        </p>
      </div>
    </div>
  );
};
