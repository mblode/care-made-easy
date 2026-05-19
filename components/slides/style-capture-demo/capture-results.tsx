"use client";

import type { CaptureResult, TailwindMappingResult } from "@style-capture/core";
import { ClipboardIcon, CrossSmallIcon } from "blode-icons-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { codeToHtml } from "shiki";

interface CaptureResultsProps {
  capturedExport: string;
  captureResult: CaptureResult;
  onClose: () => void;
  tailwindMapping: TailwindMappingResult;
}

export const CaptureResults = ({
  capturedExport,
  captureResult,
  onClose,
  tailwindMapping: _tailwindMapping,
}: CaptureResultsProps): React.JSX.Element => {
  const [copied, setCopied] = useState(false);
  const [highlightedHtml, setHighlightedHtml] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    },
    [],
  );

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const html = await codeToHtml(capturedExport, {
        lang: "xml",
        theme: "github-light",
      });
      if (!cancelled) {
        setHighlightedHtml(html);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [capturedExport]);

  const rootElement = captureResult.elements[captureResult.rootElementId];

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(capturedExport);
    setCopied(true);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, [capturedExport]);

  return (
    <div
      style={{
        bottom: 0,
        left: 0,
        position: "fixed",
        right: 0,
        zIndex: 2_147_483_640,
      }}
    >
      <div style={{ margin: "0 auto", maxWidth: "48rem", padding: "1rem" }}>
        <div
          style={{
            background: "#ffffff",
            border: "1px solid rgba(0, 0, 0, 0.12)",
            borderRadius: "16px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            style={{
              alignItems: "center",
              borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
              display: "flex",
              justifyContent: "space-between",
              padding: "12px 20px",
            }}
          >
            <p style={{ color: "#18181b", fontSize: "14px", margin: 0 }}>
              <span style={{ fontWeight: 600 }}>{rootElement?.tagName ?? "element"}</span>
              <span style={{ color: "#71717a" }}>
                {" · "}
                {captureResult.summary.elementCount} element
                {captureResult.summary.elementCount === 1 ? "" : "s"}
              </span>
            </p>
            <div style={{ alignItems: "center", display: "flex", gap: "8px" }}>
              <button
                onClick={handleCopy}
                style={{
                  alignItems: "center",
                  background: "rgba(0, 0, 0, 0.05)",
                  border: "1px solid rgba(0, 0, 0, 0.12)",
                  borderRadius: "8px",
                  color: "#18181b",
                  cursor: "pointer",
                  display: "inline-flex",
                  fontSize: "13px",
                  fontWeight: 500,
                  gap: "6px",
                  padding: "6px 12px",
                }}
                type="button"
              >
                <ClipboardIcon style={{ height: 14, width: 14 }} />
                {copied ? "Copied" : "Copy"}
              </button>
              <button
                onClick={onClose}
                style={{
                  alignItems: "center",
                  background: "transparent",
                  border: "none",
                  borderRadius: "6px",
                  color: "#71717a",
                  cursor: "pointer",
                  display: "inline-flex",
                  padding: "4px",
                }}
                type="button"
              >
                <CrossSmallIcon style={{ height: 16, width: 16 }} />
              </button>
            </div>
          </div>

          {/* Export preview */}
          <div style={{ maxHeight: "256px", overflow: "auto" }}>
            {highlightedHtml ? (
              <div
                // oxlint-disable-next-line eslint-plugin-react(no-danger) -- shiki output is safe
                dangerouslySetInnerHTML={{ __html: highlightedHtml }}
                style={{ fontSize: "12px", lineHeight: 1.625, padding: "20px" }}
              />
            ) : (
              <pre
                style={{
                  color: "#71717a",
                  fontFamily: "monospace",
                  fontSize: "12px",
                  lineHeight: 1.625,
                  margin: 0,
                  padding: "20px",
                }}
              >
                {capturedExport}
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
