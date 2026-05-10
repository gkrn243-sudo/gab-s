import ReactMarkdown from "react-markdown";
import QuizCard from "./QuizCard";
import { FileText, Download } from "lucide-react";
import JSZip from "jszip";

export default function MessageBubble({ message }) {
  const isUser = message.role === "user";
  // Renders user bubbles, AI text/markdown, quiz cards, generated images, and the secret code download.
}