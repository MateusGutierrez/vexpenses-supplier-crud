import React from "react";
import { BodyUI } from "./style";

interface Props {
    children: React.ReactNode;
}

const Content: React.FC<Props> = ({ children }) => (
    <BodyUI>
        <div className="content">
            {children}
        </div>
    </BodyUI>
)
export default Content;