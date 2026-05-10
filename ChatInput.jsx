import { useState, useRef } from "react";
import { Send, Mic, MicOff, MoreHorizontal, Paperclip, X } from "lucide-react";

export default function ChatInput({ onSend, onFileUpload, isLoading, isListening, onVoiceToggle }) {
  const [text, setText] = useState("");
  const [showUploadMenu, setShowUploadMenu] = useState(false);
  const [pendingFile, setPendingFile] = useState(null);
  const fileRef = useRef();

  const handleSend = () => {
    if (!text.trim() && !pendingFile) return;
    onSend(text, pendingFile);
    setText("");
    setPendingFile(null);
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPendingFile(file);
    setShowUploadMenu(false);
    onFileUpload && onFileUpload(file);
  };

  return (
    <div className="p-4 border-t border-border bg-card/50 backdrop-blur-sm">
      {/* file preview, textarea, voice button, send button */}
    </div>
  );
}