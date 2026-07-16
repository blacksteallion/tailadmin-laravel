export function cssVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || undefined;
}

export function brandColor(shade) {
    return cssVar(`--color-brand-${shade}`);
}
