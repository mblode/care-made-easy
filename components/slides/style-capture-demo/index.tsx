"use client";

import { Cursor1Icon } from "blode-icons-react";

import { CaptureResults } from "./capture-results";
import { InspectOverlay } from "./inspect-overlay";
import { useInspect } from "./use-inspect";

export function StyleCaptureDemo() {
  const {
    capturedExport,
    captureResult,
    clearResults,
    deactivate,
    handleCapture,
    isInspecting,
    activate,
    tailwindMapping,
  } = useInspect();

  return (
    <>
      <button
        className={`inline-flex shrink-0 items-center justify-center gap-1.5 self-start rounded-[10px] border border-transparent py-2 pr-2.5 pl-3 text-sm font-medium leading-5 transition-colors ${isInspecting ? "bg-[#4389F5] text-white hover:bg-[#3678d8]" : "bg-[color-mix(in_oklab,var(--fg)_12%,var(--bg))] text-[var(--fg)] hover:bg-[color-mix(in_oklab,var(--fg)_18%,var(--bg))]"}`}
        onClick={isInspecting ? deactivate : activate}
        type="button"
      >
        <Cursor1Icon className="size-4" />
        {isInspecting ? "Stop inspecting" : "Try it now"}
      </button>

      {isInspecting && <InspectOverlay onCapture={handleCapture} onDeactivate={deactivate} />}

      {captureResult && tailwindMapping && capturedExport && (
        <CaptureResults
          capturedExport={capturedExport}
          captureResult={captureResult}
          onClose={clearResults}
          tailwindMapping={tailwindMapping}
        />
      )}
    </>
  );
}
