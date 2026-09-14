import { ImageResponse } from "next/og";

export const alt =
  "Avikar Khakh — Software Engineer at Guardian and Technical Cofounder of Steward";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#f3f1e9",
          color: "#252820",
          padding: "60px 70px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: -1 }}>
          avikar khakh<span style={{ color: "#db4823" }}>.</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 55,
            fontSize: 92,
            letterSpacing: -5,
            lineHeight: 1.05,
          }}
        >
          <span>Avikar</span>
          <span style={{ color: "#db4823" }}>Khakh.</span>
        </div>
        <div
          style={{
            display: "flex",
            gap: 65,
            borderTop: "1px solid #d5d6cb",
            paddingTop: 27,
            marginTop: 48,
            fontSize: 22,
          }}
        >
          <span>Guardian · Software Engineer</span>
          <span>Steward · Technical Cofounder</span>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 210,
            height: 210,
            borderRadius: "50%",
            background: "#ee542c",
            right: 85,
            top: 215,
            alignItems: "center",
            justifyContent: "center",
            color: "#f3f1e9",
            fontSize: 85,
            letterSpacing: -8,
          }}
        ></div>
      </div>
    ),
    size,
  );
}
