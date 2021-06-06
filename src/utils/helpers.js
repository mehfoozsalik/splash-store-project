export function flattenProducts(data) {
  return data.map((item) => {
    let image = (item.image && item.image.url) || null

    //let image = `${url}${item.image.url}`
    return { ...item, image }
  })
}

// helper functions
export function featuredProducts(data) {
  return data.filter((item) => {
    return item.featured === true
  })
}

export function paginate(products) {
  const itemPerPage = 4
  const numberOfPage = Math.ceil(products.length / itemPerPage)
  const newProducts = Array.from({ length: numberOfPage }, (_, index) => {
    const start = index * itemPerPage
    return products.slice(start, start + itemPerPage)
  })
  return newProducts
}
