import { FC, PropsWithChildren } from "react";

const Heading: FC<PropsWithChildren> = ({ children }) => (
  <h1 className="ds-text-red-600">{children}</h1>
);

export default Heading;
