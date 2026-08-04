import {
  BookOpen,
  Globe,
  Languages,
  Sigma,
  TrendingUp,
  Wrench,
  Moon,
  Sun,
  ChevronRight,
  ChevronLeft,
  ArrowLeft,
  Check,
  RotateCcw,
  Sparkles,
  FileText,
  Layers,
  ListChecks,
  Menu,
  X,
  type LucideIcon,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Globe,
  Languages,
  Sigma,
  TrendingUp,
  Wrench,
  Moon,
  Sun,
  ChevronRight,
  ChevronLeft,
  ArrowLeft,
  Check,
  RotateCcw,
  Sparkles,
  FileText,
  Layers,
  ListChecks,
  Menu,
  X,
}

export default function Icon({
  name,
  className = '',
  size = 20,
}: {
  name: string
  className?: string
  size?: number
}) {
  const IconComponent = iconMap[name] || BookOpen
  return <IconComponent size={size} className={className} />
}
