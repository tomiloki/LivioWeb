import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
export const alt =
  "Livio — Software de gestión logística para pymes con flota propia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoBuffer = readFileSync(join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#071A17",
          width: "100%",
          height: "100%",
          display: "flex",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Background glow left */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(ellipse, rgba(34,176,125,0.08) 0%, transparent 65%)",
            display: "flex",
          }}
        />
        {/* Background glow right */}
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            right: "200px",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(ellipse, rgba(34,176,125,0.06) 0%, transparent 65%)",
            display: "flex",
          }}
        />

        {/* Left column — copy */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "72px 56px 72px 80px",
            width: "540px",
            flexShrink: 0,
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              marginBottom: "48px",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoSrc}
              alt="Livio"
              style={{ height: "52px", width: "auto" }}
            />
          </div>

          {/* Headline */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                color: "#F3F4EF",
                fontSize: "52px",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-2px",
              }}
            >
              La operación
            </span>
            <span
              style={{
                color: "#F3F4EF",
                fontSize: "52px",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-2px",
              }}
            >
              logística de tu pyme,
            </span>
            <span
              style={{
                color: "#22B07D",
                fontSize: "52px",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-2px",
              }}
            >
              en orden.
            </span>
          </div>

          {/* Subtitle */}
          <span
            style={{
              color: "#7A9088",
              fontSize: "20px",
              lineHeight: 1.45,
              fontWeight: 400,
              marginBottom: "40px",
            }}
          >
            Pedidos, choferes y evidencia digital — todo en un solo sistema.
          </span>

          {/* CTA pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "#22B07D",
              borderRadius: "100px",
              padding: "14px 28px",
              alignSelf: "flex-start",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                background: "rgba(255,255,255,0.7)",
                borderRadius: "50%",
                display: "flex",
              }}
            />
            <span
              style={{
                color: "white",
                fontSize: "18px",
                fontWeight: 700,
                letterSpacing: "-0.3px",
              }}
            >
              Piloto gratuito · Abril 2026
            </span>
          </div>
        </div>

        {/* Right column — dashboard mock */}
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: "48px 56px 48px 16px",
          }}
        >
          {/* Browser window */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              background: "#FAF9F5",
              borderRadius: "14px",
              width: "100%",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Browser chrome */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                background: "#F0EDE6",
                padding: "12px 16px",
                borderBottom: "1px solid #E8E5DE",
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#FF605C",
                  display: "flex",
                }}
              />
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#FFBD44",
                  display: "flex",
                }}
              />
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#00CA4E",
                  display: "flex",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  background: "#FAF9F5",
                  borderRadius: "6px",
                  padding: "4px 10px",
                  marginLeft: "8px",
                  border: "1px solid #E0DDD6",
                }}
              >
                <span
                  style={{ fontSize: "11px", color: "#999", fontWeight: 400 }}
                >
                  app.livio.cl/dashboard
                </span>
              </div>
            </div>

            {/* App content */}
            <div
              style={{
                display: "flex",
                padding: "20px",
                gap: "14px",
                flexDirection: "column",
              }}
            >
              {/* Header row */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#1A1A1A",
                    }}
                  >
                    Resumen del día
                  </span>
                  <span style={{ fontSize: "11px", color: "#6B7280" }}>
                    Viernes 14 de marzo, 2026
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "rgba(34,176,125,0.1)",
                    borderRadius: "8px",
                    padding: "6px 12px",
                  }}
                >
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#22B07D",
                      display: "flex",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#22B07D",
                    }}
                  >
                    94% completado
                  </span>
                </div>
              </div>

              {/* Stats row */}
              <div style={{ display: "flex", gap: "10px" }}>
                {[
                  { label: "Entregas", value: "18", color: "#1A1A1A" },
                  { label: "Completadas", value: "17", color: "#22B07D" },
                  { label: "En ruta", value: "1", color: "#E9783D" },
                  { label: "Incidentes", value: "0", color: "#9CA3AF" },
                ].map((s) => (
                  <div
                    key={s.label}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                      background: "white",
                      borderRadius: "8px",
                      padding: "10px 12px",
                      border: "1px solid #E8E5DE",
                    }}
                  >
                    <span style={{ fontSize: "10px", color: "#6B7280" }}>
                      {s.label}
                    </span>
                    <span
                      style={{
                        fontSize: "22px",
                        fontWeight: 800,
                        color: s.color,
                        lineHeight: 1.1,
                      }}
                    >
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Progress bar */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ fontSize: "10px", color: "#9CA3AF" }}>
                    Progreso del día
                  </span>
                  <span style={{ fontSize: "10px", color: "#6B7280" }}>
                    17 de 18
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    height: "6px",
                    background: "#E8E5DE",
                    borderRadius: "100px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "94%",
                      background: "#22B07D",
                      borderRadius: "100px",
                    }}
                  />
                </div>
              </div>

              {/* Delivery rows */}
              {[
                {
                  name: "Distribuidora Central",
                  status: "Entregado",
                  dot: "#22B07D",
                  pill: "rgba(34,176,125,0.12)",
                  pillText: "#22B07D",
                },
                {
                  name: "Comercial Norte",
                  status: "En ruta",
                  dot: "#E9783D",
                  pill: "rgba(233,120,61,0.12)",
                  pillText: "#E9783D",
                },
                {
                  name: "Minimarket Los Olivos",
                  status: "Entregado",
                  dot: "#22B07D",
                  pill: "rgba(34,176,125,0.12)",
                  pillText: "#22B07D",
                },
              ].map((row) => (
                <div
                  key={row.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "#F7F8F4",
                    borderRadius: "8px",
                    padding: "10px 14px",
                    border: "1px solid #E8E5DE",
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: "8px" }}
                  >
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: row.dot,
                        display: "flex",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "#1A1A1A",
                      }}
                    >
                      {row.name}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      background: row.pill,
                      borderRadius: "6px",
                      padding: "4px 10px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        color: row.pillText,
                      }}
                    >
                      {row.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
