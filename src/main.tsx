import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { App } from "./App";
import "./index.css";

// Code-split the checker so it only loads on /check.
const VisibilityChecker = lazy(() =>
  import("./VisibilityChecker").then((m) => ({ default: m.VisibilityChecker }))
);

function CheckerLoadingShell() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FAF8F3",
        color: "#57534E",
        fontFamily: '"Inter", system-ui, sans-serif',
        fontSize: "0.875rem"
      }}
    >
      Loading the AI Visibility Checker…
    </div>
  );
}

function CheckerRoute() {
  return (
    <>
      <Link
        to="/"
        aria-label="Back to Bodji Technologies"
        style={{
          position: "fixed",
          top: 20,
          left: 20,
          zIndex: 50,
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          padding: "8px 14px",
          fontSize: "0.78rem",
          fontWeight: 600,
          letterSpacing: "0.02em",
          color: "#57534E",
          textDecoration: "none",
          backgroundColor: "#FFFFFF",
          border: "1px solid #D6D3CE",
          borderRadius: 999,
          fontFamily: '"Inter", system-ui, sans-serif',
          boxShadow: "0 1px 2px rgba(0,0,0,0.04)"
        }}
      >
        ← Back to Bodji Technologies
      </Link>
      <Suspense fallback={<CheckerLoadingShell />}>
        <VisibilityChecker />
      </Suspense>
    </>
  );
}

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element #root not found");
}

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/check" element={<CheckerRoute />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
