export default (arr, name) => {
    const result = arr.filter((word) => word.product_type === name)
    return result;
}

