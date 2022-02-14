export const orderByRelevance = (data) => (
    data.sort(function (a, b) {
        return (b.thread.domain_rank - a.thread.domain_rank)
    })
)
