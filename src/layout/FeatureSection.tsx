import React from "react";

interface Props {
  children: React.ReactNode[] | React.ReactNode;
}

export default function FeatureSection({ children }: Props) {
  return (
    <>
      <div className="container mx-auto flex flex-wrap gap-5 justify-center">
        {children}
      </div>
    </>
  );
}
