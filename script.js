const filters = document.querySelectorAll('.filters button');
const products = document.querySelectorAll('.product');
filters.forEach((button) => {
  button.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    products.forEach((product) => {
      product.style.display = filter === 'all' || product.dataset.category === filter ? '' : 'none';
    });
  });
});
