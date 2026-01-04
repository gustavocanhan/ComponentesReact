import { AlertCircle } from "lucide-react";
import { useEffect, useState } from "react";

type AlertProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Alert({ isOpen, onClose }: AlertProps) {
  const [visible, setVisible] = useState(isOpen);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!isOpen) return;

    setVisible(true);
    setProgress(100);

    requestAnimationFrame(() => {
      setProgress(0);
    });

    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 4000);

    return () => clearTimeout(timer);
  }, [isOpen, onClose]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4">
      <div
        className={`relative bg-background border border-border rounded-md p-4 shadow-lg flex items-center z-50 w-100 gap-2 transition-all duration-200 ease-in-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        } `}
      >
        <div className="absolute top-0 left-0 h-1 w-full overflow-hidden rounded-t-md bg-muted">
          <div
            className="h-full bg-primary transition-all linear"
            style={{
              width: `${progress}%`,
              transitionDuration: `${4000}ms`,
            }}
          ></div>
        </div>
        <AlertCircle className="h-4 w-4" />
        <p>This Alert a title and an icon.</p>
        <p>4 Secs.</p>
      </div>
    </div>
  );
}
