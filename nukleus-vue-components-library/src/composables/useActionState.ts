

export type ActionState = "danger" | "success" | "warning" | "info" | "none" | "loading"

export function isNone(state: ActionState): boolean {
    return state === "none";
}

export function isLoading(state: ActionState): boolean {
    return state === "loading";
}

export function isDanger(state: ActionState): boolean {
    return state === "danger";
}

export function isSuccess(state: ActionState): boolean {
    return state === "success";
}

export function isWarning(state: ActionState): boolean {
    return state === "warning";
}

export function isInfo(state: ActionState): boolean {
    return state === "info";
}

export function  isNotDone(state: ActionState): boolean {
    return isNone(state) || isWarning(state) || isInfo(state) || isLoading(state);
}