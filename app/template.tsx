import { PageTransition } from "~/components/page-transition";

const Template = ({ children }: RootLayoutProps) => (
  <PageTransition>{children}</PageTransition>
);

export default Template;
