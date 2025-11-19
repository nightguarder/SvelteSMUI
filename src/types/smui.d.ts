// Minimal declarations for SMUI packages used in the examples.
// These are intentionally loose (any) to avoid blocking the template with strict types.

declare module '@smui/button' {
  const Button: any;
  export default Button;
}

declare module '@smui/textfield' {
  const TextField: any;
  export default TextField;
}

declare module '@smui/card' {
  const Card: any;
  export default Card;
}

// If you add more SMUI packages, add declarations here or install @types if available.
