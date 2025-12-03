"use client";

import { useState } from "react";
import EditorScreen from "./EditorScreen";

type RouteId = "editor" | "gallery" | "settings";

const ROUTES: { id: RouteId; label: string }[] = [
  { id: "editor", label: "에디터" },
  { id: "gallery", label: "갤러리" },
  { id: "settings", label: "설정" },
];

function PlaceholderScreen(props: { title: string; description: string }) {
  const { title, description } = props;

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="max-w-lg rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90 px-8 py-10 shadow-2xl">
        <h1 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          {title}
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function AppRouter() {
  const [route, setRoute] = useState<RouteId>("editor");

  const renderRoute = () => {
    switch (route) {
      case "editor":
        return <EditorScreen />;
      case "gallery":
        return (
          <PlaceholderScreen
            title="갤러리"
            description="나중에 생성된 텍스트 이미지를 모아볼 수 있는 갤러리 화면이 여기에 추가될 예정입니다."
          />
        );
      case "settings":
        return (
          <PlaceholderScreen
            title="설정"
            description="폰트, 테마, Export 기본 옵션 등을 조정하는 설정 화면이 여기에 추가될 예정입니다."
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <button
            type="button"
            onClick={() => setRoute("editor")}
            className="text-sm font-semibold tracking-tight text-slate-900 transition hover:text-slate-700 dark:text-slate-100 dark:hover:text-slate-300"
          >
            DesignFont
          </button>
          <nav className="flex items-center gap-1 text-[13px]">
            {ROUTES.map((item) => {
              const isActive = item.id === route;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setRoute(item.id)}
                  className={`rounded-full px-3 py-1.5 transition text-xs font-medium ${
                    isActive
                      ? "bg-slate-900 text-slate-50 dark:bg-slate-100 dark:text-slate-900"
                      : "text-slate-500 hover:text-slate-800 hover:bg-slate-100/80 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-900"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </header>
      <main>{renderRoute()}</main>
    </div>
  );
}