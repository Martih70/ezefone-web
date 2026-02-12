"use client";

export interface ToastProps {
  message: string;
  isVisible: boolean;
}

export default function Toast({ message, isVisible }: ToastProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in-up">
      <div className="bg-phone text-white px-8 py-4 rounded-xl shadow-2xl flex items-center gap-3">
        <span className="text-lg">🎉</span>
        <span className="text-lg font-semibold">{message}</span>
      </div>
    </div>
  );
}
