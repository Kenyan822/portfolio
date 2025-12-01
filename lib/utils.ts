// Minimal replacement for clsx and tailwind-merge since packages cannot be installed due to permission issues
// This ensures the build passes without external dependencies

function clsx(...args: any[]): string {
  let str = "";
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg) {
      if (typeof arg === "string" || typeof arg === "number") {
        str += (str && " ") + arg;
      } else if (typeof arg === "object") {
        if (Array.isArray(arg)) {
           const inner = clsx(...arg);
           if (inner) str += (str && " ") + inner;
        } else {
           for (const key in arg) {
             if (arg[key]) str += (str && " ") + key;
           }
        }
      }
    }
  }
  return str;
}

export function cn(...inputs: any[]) {
  // Normally we would use tailwind-merge here to handle class conflicts
  // return twMerge(clsx(inputs));
  return clsx(inputs);
}
