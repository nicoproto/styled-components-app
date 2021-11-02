import styled from "styled-components";
import "./contact_card.css";

function Breadcrumbs({ children }) {
  return (
    <nav aria-label="Breadcrumb">
      <BreadcrumbList>
        {children}
      </BreadcrumbList>
    </nav>
  );
};

function Crumb({ href, isCurrentPage,children }) {
  return (
    <CrumbWrapper>
      <CrumbLink
        href={href}
        aria-current={isCurrentPage ? 'page' : undefined}
      >
        {children}
      </CrumbLink>
    </CrumbWrapper>
  );
};

const BreadcrumbList = styled.ol`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const CrumbWrapper = styled.li`
  display: inline;
  --spacing: 12px;

  &:not(:first-of-type) {
    margin-left: var(--spacing);

    &:before {
      content: "/";
      opacity: 0.25;
      margin-right: var(--spacing);
    }
  }
`;

const CrumbLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: revert;
  }
`;


export { Breadcrumbs, Crumb };
