declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}

// Specifically declare globals.css
declare module "./globals.css" {
  const content: Record<string, string>;
  export default content;
}
