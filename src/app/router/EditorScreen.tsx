"use client";

import type { CSSProperties } from "react";
import { useMemo, useState } from "react";
import styles from "../page.module.css";
import {
  nanumGothic,
  nanumMyeongjo,
  nanumSquare,
  nanumSquareNeo,
  nanumBarunGothic,
  nanumBarunPen,
  nanumBrush,
  nanumHuman,
  nanumPen,
} from "../fonts/nanum";

type TextAlignOption = "left" | "center" | "right";

const FONT_OPTIONS = [
  {
    label: "Nanum Gothic",
    value: nanumGothic.style.fontFamily,
  },
  {
    label: "Nanum Myeongjo",
    value: nanumMyeongjo.style.fontFamily,
  },
  {
    label: "Nanum Square",
    value: nanumSquare.style.fontFamily,
  },
  {
    label: "Nanum Square Neo",
    value: nanumSquareNeo.style.fontFamily,
  },
  {
    label: "Nanum Barun Gothic",
    value: nanumBarunGothic.style.fontFamily,
  },
  {
    label: "Nanum Barun Pen",
    value: nanumBarunPen.style.fontFamily,
  },
  {
    label: "Nanum Brush",
    value: nanumBrush.style.fontFamily,
  },
  {
    label: "Nanum Human",
    value: nanumHuman.style.fontFamily,
  },
  {
    label: "Nanum Pen",
    value: nanumPen.style.fontFamily,
  },
  {
    label: "Geist Sans",
    value:
      'var(--font-geist-sans), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  {
    label: "Serif",
    value: 'Georgia, "Times New Roman", serif',
  },
  {
    label: "Mono",
    value:
      'var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
];

const PRESETS = [
  {
    id: "sunset",
    name: "Sunset Poster",
    gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    textColor: "#1f2933",
  },
  {
    id: "night",
    name: "Midnight Neon",
    gradient:
      "radial-gradient(circle at top, #1a2a6c 0%, #020617 50%, #000000 100%)",
    textColor: "#f9fafb",
  },
  {
    id: "minimal",
    name: "Minimal Card",
    gradient: "linear-gradient(145deg, #f9fafb 0%, #e5e7eb 100%)",
    textColor: "#111827",
  },
];

export default function EditorScreen() {
  const [text, setText] = useState(
    "Design your text poster.\n디자인이 좋은 텍스트 이미지를 만들어 보세요.",
  );
  const [fontFamily, setFontFamily] = useState(
    FONT_OPTIONS[0]?.value ?? "system-ui",
  );
  const [fontLabel, setFontLabel] = useState(
    FONT_OPTIONS[0]?.label ?? "Geist Sans",
  );
  const [fontSize, setFontSize] = useState(56);
  const [fontWeight, setFontWeight] = useState(700);
  const [align, setAlign] = useState<TextAlignOption>("center");
  const [color, setColor] = useState("#111827");
  const [presetId, setPresetId] = useState<string>("minimal");

  const activePreset = useMemo(
    () => PRESETS.find((preset) => preset.id === presetId) ?? PRESETS[2],
    [presetId],
  );

  const handlePresetClick = (id: string) => {
    const nextPreset = PRESETS.find((preset) => preset.id === id);
    if (!nextPreset) return;

    setPresetId(id);
    setColor(nextPreset.textColor);
  };

  const previewStyle: CSSProperties = {
    fontFamily,
    fontSize: `${fontSize}px`,
    fontWeight,
    lineHeight: 1.1,
    textAlign: align,
    color,
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.headerTitle}>
            <span className={styles.badge}>DesignFont</span>
            <h1 className={styles.title}>
              텍스트로 만드는 타이포그래피 이미지
            </h1>
            <p className={styles.subtitle}>
              폰트와 색 조합을 바꾸면서 즉시 미리보기해 보세요. 이후 단계에서
              이미지를 저장하는 기능을 추가할 수 있습니다.
            </p>
          </div>
        </header>

        <section className={styles.content}>
          <section className={styles.panel}>
            <h2 className={styles.panelTitle}>텍스트 & 스타일</h2>

            <div className={styles.fieldGroup}>
              <div className={styles.labelRow}>
                <label htmlFor="message" className={styles.label}>
                  메시지
                </label>
                <span className={styles.labelHint}>
                  줄바꿈으로 여러 줄을 만들 수 있습니다.
                </span>
              </div>
              <textarea
                id="message"
                className={styles.textarea}
                value={text}
                onChange={(event) => setText(event.target.value)}
                rows={5}
              />
            </div>

            <div className={styles.fieldGrid}>
              <div className={styles.fieldGroup}>
                <label htmlFor="font" className={styles.label}>
                  폰트
                </label>
                <select
                  id="font"
                  className={styles.select}
                  value={fontLabel}
                  onChange={(event) => {
                    const selected = FONT_OPTIONS.find(
                      (option) => option.label === event.target.value,
                    );
                    if (!selected) return;
                    setFontLabel(selected.label);
                    setFontFamily(selected.value);
                  }}
                >
                  {FONT_OPTIONS.map((option) => (
                    <option key={option.label} value={option.label}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.fieldGroup}>
                <div className={styles.labelRow}>
                  <label htmlFor="fontSize" className={styles.label}>
                    폰트 크기
                  </label>
                  <span className={styles.valueLabel}>{fontSize}px</span>
                </div>
                <input
                  id="fontSize"
                  className={styles.range}
                  type="range"
                  min={24}
                  max={96}
                  value={fontSize}
                  onChange={(event) =>
                    setFontSize(Number(event.target.value))
                  }
                />
              </div>

              <div className={styles.fieldGroup}>
                <div className={styles.labelRow}>
                  <label htmlFor="fontWeight" className={styles.label}>
                    폰트 두께
                  </label>
                  <span className={styles.valueLabel}>{fontWeight}</span>
                </div>
                <input
                  id="fontWeight"
                  className={styles.range}
                  type="range"
                  min={100}
                  max={900}
                  step={100}
                  value={fontWeight}
                  onChange={(event) =>
                    setFontWeight(Number(event.target.value))
                  }
                />
              </div>
            </div>

            <div className={styles.fieldGrid}>
              <div className={styles.fieldGroup}>
                <div className={styles.labelRow}>
                  <span className={styles.label}>정렬</span>
                </div>
                <div className={styles.segmented}>
                  {(["left", "center", "right"] as TextAlignOption[]).map(
                    (option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setAlign(option)}
                        className={`${styles.segmentedItem} ${
                          align === option ? styles.segmentedItemActive : ""
                        }`}
                      >
                        {option === "left" && "좌측"}
                        {option === "center" && "가운데"}
                        {option === "right" && "우측"}
                      </button>
                    ),
                  )}
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <div className={styles.labelRow}>
                  <label htmlFor="color" className={styles.label}>
                    텍스트 색상
                  </label>
                  <span className={styles.valueLabel}>
                    {color.toUpperCase()}
                  </span>
                </div>
                <div className={styles.colorRow}>
                  <input
                    id="color"
                    className={styles.colorInput}
                    type="color"
                    value={color}
                    onChange={(event) => setColor(event.target.value)}
                  />
                  <input
                    className={styles.colorHex}
                    type="text"
                    value={color}
                    onChange={(event) => setColor(event.target.value)}
                    spellCheck={false}
                  />
                </div>
              </div>
            </div>

            <div className={styles.fieldGroup}>
              <div className={styles.labelRow}>
                <span className={styles.label}>프리셋</span>
                <span className={styles.labelHint}>
                  배경 그라디언트와 기본 색 조합을 빠르게 적용합니다.
                </span>
              </div>
              <div className={styles.presetList}>
                {PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => handlePresetClick(preset.id)}
                    className={`${styles.presetButton} ${
                      presetId === preset.id ? styles.presetButtonActive : ""
                    }`}
                  >
                    <span
                      className={styles.presetSwatch}
                      style={{ backgroundImage: preset.gradient }}
                    />
                    <span className={styles.presetName}>
                      {preset.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.preview}>
            <h2 className={styles.panelTitle}>미리보기</h2>
            <div
              className={styles.previewCard}
              style={{ backgroundImage: activePreset.gradient }}
            >
              <div className={styles.previewCanvas}>
                <p className={styles.previewText} style={previewStyle}>
                  {text || "여기에 텍스트를 입력하세요"}
                </p>
              </div>
            </div>
            <p className={styles.previewMeta}>
              지금은 브라우저에서만 보는 미리보기입니다. 이후 단계에서 PNG
              등 이미지로 저장하는 기능을 추가할 수 있습니다.
            </p>
          </section>
        </section>

        <footer className={styles.footer}>
          <span>
            DesignFont · Tailwind & 나눔글꼴 기반 텍스트 이미지 툴 · 포함된
            나눔글꼴은 NAVER에서 제공되며 나눔글꼴 라이선스를 따릅니다.
          </span>
        </footer>
      </main>
    </div>
  );
}