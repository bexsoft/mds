import React from "react";
import { LogoBaseProps } from "./LogoBase.types";
declare const LogoBase: import("styled-components").IStyledComponent<
  "web",
  import("styled-components/dist/types").Substitute<
    React.SVGProps<SVGSVGElement>,
    React.SVGProps<any> & LogoBaseProps
  >
>;
export default LogoBase;
