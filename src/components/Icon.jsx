import * as Icons from "lucide-react";

export default function Icon({ name, size = 22, ...props }) {
  const Component = Icons[name] || Icons.Circle;
  return <Component size={size} {...props} />;
}