import styles from "@/components/ui/Container/Container.module.css";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean;
  max?: boolean;
}

export default function Container({
  children,
  className = "",
  fluid = false,
  max = false,
}: ContainerProps) {
  let containerClass = styles.container;

  if (fluid) {
    containerClass = styles.container_fluid;
  } else if (max) {
    containerClass = styles.container_max;
  }

  return <div className={`${containerClass} ${className}`}>{children}</div>;
}
