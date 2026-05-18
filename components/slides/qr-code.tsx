"use client";

import { BeautifulQRCode } from "@beautiful-qr-code/react";

export function QRCode({
  className,
  data,
  foregroundColor = "#f6ebd9",
  backgroundColor = "transparent",
}: {
  className?: string;
  data: string;
  foregroundColor?: string;
  backgroundColor?: string;
}) {
  return (
    <BeautifulQRCode
      backgroundColor={backgroundColor}
      className={className}
      data={data}
      foregroundColor={foregroundColor}
      radius={1}
      type="svg"
    />
  );
}
