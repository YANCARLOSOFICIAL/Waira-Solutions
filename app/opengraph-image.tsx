import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Waira Solutions | Software, IA y Transformación Digital'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const LOGO_B64 =
  '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'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0F1E',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Glow top */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 700,
            height: 400,
            background:
              'radial-gradient(ellipse, rgba(0,212,255,0.18) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        {/* Glow bottom-right */}
        <div
          style={{
            position: 'absolute',
            bottom: -80,
            right: -80,
            width: 400,
            height: 300,
            background:
              'radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Main card */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 32,
          }}
        >
          {/* Logo + company name row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 28,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 24,
              padding: '20px 36px',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`data:image/jpeg;base64,${LOGO_B64}`}
              width={100}
              height={100}
              alt=""
              style={{ borderRadius: 16 }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span
                style={{
                  fontSize: 52,
                  fontWeight: 700,
                  color: '#ffffff',
                  letterSpacing: '-1px',
                  lineHeight: 1,
                }}
              >
                Waira
                <span style={{ color: '#00D4FF' }}>.</span>
              </span>
              <span
                style={{
                  fontSize: 20,
                  color: 'rgba(255,255,255,0.55)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                Solutions
              </span>
            </div>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 28,
              color: 'rgba(255,255,255,0.75)',
              textAlign: 'center',
              maxWidth: 700,
              lineHeight: 1.4,
            }}
          >
            Software · IA · Cloud · Automatización
          </div>

          {/* Bottom badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(0,212,255,0.08)',
              border: '1px solid rgba(0,212,255,0.2)',
              borderRadius: 999,
              padding: '8px 24px',
              color: '#00D4FF',
              fontSize: 18,
            }}
          >
            🇨🇴 Popayán, Colombia — Transformación Digital
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
