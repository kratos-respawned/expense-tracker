"use client";
import { useLongPress } from "use-long-press";
interface LongpressProps extends React.HTMLAttributes<HTMLButtonElement> {
  threshold?: number;
  action: () => void;
}
const Longpress = ({ action, children, threshold = 700 }: LongpressProps) => {
  const bind = useLongPress(
    () => {
      action();
    },
    {
      threshold: threshold,
    }
  );

  return <button {...bind()}>Press me</button>;
};
export default Longpress;
