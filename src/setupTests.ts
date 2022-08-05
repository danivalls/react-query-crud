import '@testing-library/jest-dom';
import React from "react";
import { Providers } from "providers";
import { render, RenderOptions } from "@testing-library/react";

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";
export { customRender as render };
