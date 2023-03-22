import React from "react";
import type { ReactElement, ReactNode } from "react";
import styled from "styled-components";

export interface LinkGroupProps {
  children: ReactNode;
}

const LinkGroupContainer = styled.ul<LinkGroupProps>`
  display: flex;
  color: var(--link-color);
  padding: 0;
  list-style: none;

  .minesweeper-link {
    padding: 0 0.5rem;
  }

  li + li {
    border-left: 1px solid var(--link-color);
  }
`;

export const LinkGroup = ({ children }: LinkGroupProps): ReactElement => {
  return (
    <LinkGroupContainer className="minesweeper-link-group">
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return <li key={index}>{child}</li>;
        }
        return null;
      })}
    </LinkGroupContainer>
  );
};
