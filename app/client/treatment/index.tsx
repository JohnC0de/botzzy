import {
  errorBoundaryContainer,
  errorBoundaryHeading,
  errorBoundaryStrong,
  errorBoundaryCode,
  errorBoundaryAside,
  errorBoundaryAncora,
} from "./styles.css";
import type { ErrorBoundaryComponent } from "@remix-run/node";

export const Treatment: ErrorBoundaryComponent = ({ error }) => {
  const { message } = error;

  return (
    <div className={errorBoundaryContainer}>
      <h1 className={errorBoundaryHeading}>Unexpected Server Error</h1>

      <strong className={errorBoundaryStrong}>
        <code className={errorBoundaryCode}>Error message: {message}</code>
        <aside className={errorBoundaryAside} />
        An error occurred but was successfully handled, contact the responsible
        developer.
        <a
          className={errorBoundaryAncora}
          href="mailto:lucasedugoncalves123@gmail.com"
        >
          Lucas Gonçalves
        </a>
      </strong>
    </div>
  );
};
