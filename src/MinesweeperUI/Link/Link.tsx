import React from "react";
import type { ReactElement } from "react";
import styled from "styled-components";

export interface LinkProps {
  children: string;
  onClick: () => void;
}

const LinkContainer = styled.a<LinkProps>`
  display: inline-block;
  color: var(--link-color);
  text-decoration: underline;
  cursor: pointer;
`;

export const Link = ({
  children = "link",
  onClick,
}: LinkProps): ReactElement => {
  return (
    <LinkContainer onClick={onClick} className="minesweeper-link">
      {children}
    </LinkContainer>
  );
};
