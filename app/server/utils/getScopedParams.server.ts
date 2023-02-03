export function getScopedParams(request: Request, scope: string = "") {
  const url = new URL(request.url);

  return scope === ""
    ? url.searchParams
    : new URLSearchParams(
        Array.from(url.searchParams.entries())
          .filter(([key]) => key.startsWith(`${scope}:`))
          .map(([key, value]) => [key.replace(`${scope}:`, ""), value])
      );
}
