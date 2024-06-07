

export type Color = "azure" | "ocean" | "shore" | "gray" | "danger" | "warning" | "success" | "info";
export type Shade = "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "1000";

export function useColor(color: Color, shade: Shade){
    return `var(--${color}-${shade}`
}
