export function filterControl(urlSearch: URLSearchParams, filters: string[]) {
  const activeFilters: { key: string; value: string }[] = [];

  filters.forEach((filter) => {
    const data = urlSearch.get(filter);
    if (data) {
      activeFilters.push({
        key: filter,
        value: data,
      });
    }
  });

  const concatData = activeFilters
    .map((filter) => `&${filter.key}=${filter.value}`)
    .join();

  return concatData.length === 0
    ? ""
    : `?${concatData.replace(/,/g, "").replace("&", "")}`;
}
