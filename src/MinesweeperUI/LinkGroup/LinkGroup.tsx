import React from "react";
import type { ReactElement, ReactNode } from "react";
import styled from "styled-components";

export interface LinkGroupProps {
  children: ReactNode;
}

const LinkGroupContainer = styled.nav<LinkGroupProps>`
  display: flex;
  color: var(--link-color);
  padding: 0;
  margin: 0;
  list-style: none;

  li + li {
    border-left: 1px solid var(--link-color);
  }

  li {
    --li-padding: 0.5rem;

    :first-of-type {
      padding-right: var(--li-padding);
    }

    :last-of-type {
      padding-left: var(--li-padding);
    }

    :not(:first-of-type):not(:last-of-type) .minesweeper-link {
      padding: 0 var(--li-padding);
    }
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
