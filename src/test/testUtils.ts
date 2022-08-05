import { RenderOptions, render, renderHook } from "@testing-library/react";
import { Providers } from "providers";
import React from "react";

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: Providers, ...options });

const customRenderHook: typeof renderHook = (hookRendering, options) =>
  renderHook(hookRendering, { wrapper: Providers, ...options });

export * from "@testing-library/react";
export { customRender as render, customRenderHook as renderHook };
