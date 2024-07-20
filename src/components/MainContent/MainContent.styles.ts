import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  &.fade-in {
    opacity: 1;
    transform: translateY(0);
  }

  &.fade-out {
    opacity: 0;
    transform: translateY(20px);
  }
`;

export const TransitionWrapper = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
`;