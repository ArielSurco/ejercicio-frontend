export const filterBeetwen = (start, end, data) => (
    data.filter((element, index) => (index >= start && index <= end))
)

export const filterByTextOrTitle = (data, value) => (
    data.filter(x => (x.title.includes(value) || x.text.includes(value)))
)